import json
import os
import random
import threading
import time

import urllib.request
import urllib.parse

from platypush.context import get_bus
from platypush.plugins import Plugin, action
from platypush.message.event.torrent import \
    TorrentDownloadStartEvent, TorrentSeedingStartEvent, \
    TorrentStateChangeEvent, TorrentDownloadProgressEvent, \
    TorrentDownloadCompletedEvent, TorrentDownloadStopEvent


class TorrentPlugin(Plugin):
    """
    Plugin to search and download torrents.

    Requires:

        * **python-libtorrent** (``pip install git+https://github.com/arvidn/libtorrent``)
        * **requests** (``pip install requests``) [optional] for torrent info URL download
    """

    default_torrent_ports = [6881, 6891]
    supported_categories = {
        'movies': 'https://movies-v2.api-fetch.website/movies/1',
        'tv': 'https://tv-v2.api-fetch.website/tv/1',
        'anime': 'https://anime.api-fetch.website/anime/1',
    }

    torrent_state = {}
    transfers = {}

    def __init__(self, download_dir=None, torrent_ports=[], *argv, **kwargs):
        """
        :param download_dir: Directory where the videos/torrents will be downloaded (default: none)
        :type download_dir: str

        :param torrent_ports: Torrent ports to listen on (default: 6881 and 6891)
        :type torrent_ports: list[int]
        """

        super().__init__(*argv, **kwargs)

        self.torrent_ports = torrent_ports if torrent_ports else self.default_torrent_ports
        self.download_dir = None

        if download_dir:
            self.download_dir = os.path.abspath(os.path.expanduser(download_dir))

    def _search_all(self, query, *args, **kwargs):
        results = {
            category: []
            for category in self.supported_categories.keys()
        }

        def worker(category):
            results[category] = self.search(query, category=category, *args, **kwargs).output

        workers = [
            threading.Thread(target=worker, kwargs={'category': category})
            for category in self.supported_categories.keys()
        ]

        for worker in workers:
            worker.start()

        for worker in workers:
            worker.join()

        ret = []
        for (category, items) in results.items():
            ret += items
        return ret

    @action
    def search(self, query, category=None, language=None):
        """
        Perform a search of video torrents.

        :param query: Query string, video name or partial name
        :type query: str

        :param category: Category to search. Supported types: "movies", "tv", "anime".
            Default: None (search all categories)
        :type category: str

        :param language: Language code for the results - example: "en" (default: None, no filter)
        :type language: str
        """

        if not category:
            return self._search_all(query, language=language)

        if category not in self.supported_categories:
            raise RuntimeError('Unsupported category {}. Supported category: {}'.
                               format(category, self.supported_categories.keys()))

        self.logger.info('Searching {} torrents for "{}"'.format(category, query))
        url = 'https://{category}-v2.api-fetch.website/{category}/1'.format(category=category)
        request = urllib.request.urlopen(urllib.request.Request(
            self.supported_categories[category] + '?' + urllib.parse.urlencode({
                'sort': 'relevance',
                'keywords': query,
            }),
            headers={
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 ' +
                              '(KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
            })
        )

        response = request.read()
        if isinstance(response, bytes):
            response = response.decode('utf-8')

        return sorted([
            {
                'imdb_id': result.get('imdb_id'),
                'type': category,
                'title': '{title} [{category}][{language}][{quality}]'.format(
                    title=result.get('title'), language=lang, quality=quality, category=category),
                'year': result.get('year'),
                'synopsis': result.get('synopsis'),
                'trailer': result.get('trailer'),
                'language': lang,
                'quality': quality,
                'size': item.get('size'),
                'seeds': item.get('seed'),
                'peers': item.get('peer'),
                'url': item.get('url'),
            }
            for result in (json.loads(response) or [])
            for (lang, items) in result.get('torrents', {}).items()
            if not language or language == lang
            for (quality, item) in items.items()
        ], key=lambda _: _.get('seeds'), reverse=True)

    @action
    def download(self, torrent, download_dir=None):
        """
        Download a torrent.

        :param torrent: Torrent to download. Supported formats:

            * Magnet URLs
            * Torrent URLs
            * Local torrent file

        :type resource: str

        :param download_dir: Directory to download, overrides the default download_dir attribute (default: None)
        :type download_dir: str
        """

        import libtorrent as lt

        if not download_dir:
            if self.download_dir:
                download_dir = self.download_dir
            else:
                raise RuntimeError('download_dir not specified')

        download_dir = os.path.abspath(os.path.expanduser(download_dir))
        os.makedirs(download_dir, exist_ok=True)
        info = {}
        torrent_file = None
        magnet = None
        bus = get_bus()

        if torrent.startswith('magnet:?'):
            magnet = torrent
            info = lt.parse_magnet_uri(magnet)
        elif torrent.startswith('http://') or torrent.startswith('https://'):
            import requests
            response = requests.get(torrent, allow_redirects=True)
            torrent_file = os.path.join(download_dir,
                                        self._generate_rand_filename())

            with open(torrent_file, 'wb') as f:
                f.write(response.content)
        else:
            torrent_file = os.path.abspath(os.path.expanduser(torrent))
            if not os.path.isfile(torrent_file):
                raise RuntimeError('{} is not a valid torrent file'.format(torrent_file))

        if torrent_file:
            file_info = lt.torrent_info(torrent_file)
            info = {
                'name': file_info.name(),
                'url': torrent,
                'trackers': [t.url for t in list(file_info.trackers())],
                'save_path': download_dir,
            }

        ses = lt.session()
        ses.listen_on(*self.torrent_ports)

        self.logger.info('Downloading "{}" to "{}" from [{}]'
                     .format(info['name'], self.download_dir, torrent))

        params = {
            'save_path': download_dir,
            'storage_mode': lt.storage_mode_t.storage_mode_sparse,
        }

        if magnet:
            transfer = lt.add_magnet_uri(ses, magnet, params)
        elif torrent_file:
            params['ti'] = file_info
            transfer = ses.add_torrent(params)

        status = transfer.status()
        files = []

        self.transfers[torrent] = transfer
        self.torrent_state[torrent] = {
            'url': torrent,
            'title': info['name'],
            'trackers': info['trackers'],
            'save_path': download_dir,
        }

        bus.post(TorrentDownloadStartEvent(**self.torrent_state[torrent]))
        last_status = None

        while not status.is_seeding:
            if not torrent in self.transfers:
                self.logger.info('Torrent {} has been stopped and removed')
                bus.post(TorrentDownloadStopEvent(url=torrent))
                return

            if not last_status:
                bus.post(TorrentSeedingStartEvent(**self.torrent_state[torrent]))

            status = transfer.status()
            torrent_file = transfer.torrent_file()
            if torrent_file:
                files = [os.path.join(
                            self.download_dir,
                            torrent_file.files().file_path(i))
                    for i in range(0, torrent_file.files().num_files())
                ]

            self.torrent_state[torrent]['progress'] = round(100 * status.progress, 2)
            self.torrent_state[torrent]['download_rate'] = status.download_rate
            self.torrent_state[torrent]['upload_rate'] = status.upload_rate
            self.torrent_state[torrent]['num_peers'] = status.num_peers
            self.torrent_state[torrent]['state'] = status.state

            if last_status and status.progress != last_status.progress:
                bus.post(TorrentDownloadProgressEvent(**self.torrent_state[torrent]))

            if not last_status or status.state != last_status.state:
                bus.post(TorrentStateChangeEvent(**self.torrent_state[torrent]))

            self.logger.info(('Torrent download: {:.2f}% complete (down: {:.1f} kb/s ' +
                         'up: {:.1f} kB/s peers: {} state: {})')
                         .format(status.progress * 100,
                                 status.download_rate / 1000,
                                 status.upload_rate / 1000,
                                 status.num_peers, status.state))

            last_status = status
            time.sleep(5)

        if torrent_file:
            try: os.unlink(torrent_file)
            except: pass

        bus.post(TorrentDownloadCompletedEvent(**self.torrent_state[torrent], files=files))
        del self.torrent_state[torrent]
        del self.transfers[torrent]
        return files


    @action
    def get_status(self):
        """
        Get the status of the current transfers.

        :returns: A dictionary in the format torrent_url -> status
        """

        return self.torrent_state

    @action
    def pause(self, torrent):
        """
        Pause a torrent transfer.

        :param torrent: Torrent URL as returned from `get_status()`
        :type torrent: str
        """

        if torrent not in self.transfers:
            return (None, "No transfer in progress for {}".format(torrent))

        self.transfers[torrent].pause()

    @action
    def resume(self, torrent):
        """
        Resume a torrent transfer.

        :param torrent: Torrent URL as returned from `get_status()`
        :type torrent: str
        """

        if torrent not in self.transfers:
            return (None, "No transfer in progress for {}".format(torrent))

        self.transfers[torrent].resume()

    @action
    def remove(self, torrent):
        """
        Stops and removes a torrent transfer.

        :param torrent: Torrent URL as returned from `get_status()`
        :type torrent: str
        """

        if torrent not in self.transfers:
            return (None, "No transfer in progress for {}".format(torrent))

        self.transfers[torrent].pause()
        del self.torrent_state[torrent]
        del self.transfers[torrent]

    def _generate_rand_filename(self, length=16):
        name = ''
        for i in range(0, length):
            name += hex(random.randint(0, 15))[2:].upper()
        return name + '.torrent'

# vim:sw=4:ts=4:et:

