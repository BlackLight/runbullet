import os
import re
import threading

from platypush.context import get_bus, get_plugin
from platypush.plugins.media import PlayerState, MediaPlugin
from platypush.message.event.media import MediaPlayEvent, MediaPlayRequestEvent, \
    MediaPauseEvent, MediaStopEvent, NewPlayingMediaEvent

from platypush.plugins import action


class MediaMpvPlugin(MediaPlugin):
    """
    Plugin to control MPV instances

    Requires:

        * **python-mpv** (``pip install python-mpv``)
        * **mpv** executable on your system
    """

    _default_mpv_args = {
        'ytdl': True,
        'start_event_thread': True,
    }

    def __init__(self, args=None, *argv, **kwargs):
        """
        Create the MPV wrapper.

        :param args: Default arguments that will be passed to the mpv executable
            as a key-value dict (names without the `--` prefix). See `man mpv`
            for available options.
        :type args: dict[str, str]
        """

        super().__init__(*argv, **kwargs)

        self.args = self._default_mpv_args
        if args:
            self.args.update(args)

        self._player = None
        self._is_playing_torrent = False
        self._mpv_stopped_event = threading.Event()


    def _init_mpv(self, args=None):
        import mpv

        if self._player:
            try:
                self.quit()
            except Exception as e:
                self.logger.debug('Failed to quit mpv before play: {}'.
                                  format(str(e)))

        mpv_args = self.args.copy()
        if args:
            mpv_args.update(args)

        self._player = mpv.MPV(**mpv_args)
        self._player.register_event_callback(self._event_callback())

    def _event_callback(self):
        def callback(event):
            from mpv import MpvEventID as Event
            self.logger.debug('Received mpv event: {}'.format(event))

            evt = event.get('event_id')
            if not evt:
                return

            bus = get_bus()
            if evt == Event.FILE_LOADED:
                self._mpv_stopped_event.clear()
                bus.post(NewPlayingMediaEvent(resource=self._get_current_resource()))
                bus.post(MediaPlayEvent(resource=self._get_current_resource()))
            elif evt == Event.PAUSE:
                bus.post(MediaPauseEvent(resource=self._get_current_resource()))
            elif evt == Event.UNPAUSE:
                bus.post(MediaPlayEvent(resource=self._get_current_resource()))
            elif evt == Event.END_FILE or evt == Event.SHUTDOWN:
                if evt == Event.SHUTDOWN:
                    self._player = None
                self._mpv_stopped_event.set()
                bus.post(MediaStopEvent())
        return callback

    def _get_youtube_link(self, resource):
        base_url = 'https://youtu.be/'
        regexes = ['^https://(www\.)?youtube.com/watch\?v=([^?&#]+)',
                   '^https://(www\.)?youtu.be.com/([^?&#]+)',
                   '^(youtube:video):([^?&#]+)']

        for regex in regexes:
            m = re.search(regex, resource)
            if m: return base_url + m.group(2)
        return None


    @action
    def execute(self, cmd, **args):
        """
        Execute a raw mpv command.
        """
        if not self._player:
            return (None, 'No mpv instance is running')
        return self._player.command(cmd, *args)


    @action
    def play(self, resource, subtitles=None, **args):
        """
        Play a resource.

        :param resource: Resource to play - can be a local file or a remote URL
        :type resource: str

        :param subtitles: Path to optional subtitle file
        :type subtitles: str

        :param args: Extra runtime arguments that will be passed to the
            mpv executable as a key-value dict (keys without `--` prefix)
        :type args: dict[str,str]
        """

        get_bus().post(MediaPlayRequestEvent(resource=resource))
        self._init_mpv(args)

        if subtitles:
            args['sub_file'] = self.get_subtitles_file(subtitles)

        resource = self._get_resource(resource)
        if resource.startswith('file://'):
            resource = resource[7:]
        elif resource.startswith('magnet:?'):
            self._is_playing_torrent = True
            return get_plugin('media.webtorrent').play(resource)
        else:
            yt_resource = self._get_youtube_link(resource)
            if yt_resource: resource = yt_resource

        self._is_playing_torrent = False
        ret = self._player.play(resource)
        return self.status()


    @action
    def pause(self):
        """ Toggle the paused state """
        if not self._player:
            return (None, 'No mpv instance is running')

        self._player.pause = not self._player.pause
        return self.status()


    def _stop_torrent(self):
        if self._is_playing_torrent:
            try:
                get_plugin('media.webtorrent').quit()
            except:
                self.logger.warning('Cannot quit the webtorrent instance: {}'.
                                    format(str(e)))

    @action
    def quit(self):
        """ Quit the player (same as `stop`) """
        self._stop_torrent()
        if not self._player:
            return (None, 'No mpv instance is running')

        self._player.quit()
        self._player = None
        # self._player.terminate()
        return { 'state': PlayerState.STOP.value }


    @action
    def stop(self):
        """ Stop the application (same as `quit`) """
        return self.quit()

    @action
    def voldown(self, step=10.0):
        """ Volume down by (default: 10)% """
        if not self._player:
            return (None, 'No mpv instance is running')
        return self.set_volume(self._player.volume-step)

    @action
    def volup(self, step=10.0):
        """ Volume up by (default: 10)% """
        if not self._player:
            return (None, 'No mpv instance is running')
        return self.set_volume(self._player.volume+step)

    @action
    def set_volume(self, volume):
        """
        Set the volume

        :param volume: Volume value between 0 and 100
        :type volume: float
        """
        if not self._player:
            return (None, 'No mpv instance is running')

        volume = max(0, min(self._player.volume_max, volume))
        self._player.volume = volume
        return { 'volume': volume }

    @action
    def seek(self, position):
        """
        Seek backward/forward by the specified number of seconds

        :param relative_position: Number of seconds relative to the current cursor
        :type relative_position: int
        """
        if not self._player:
            return (None, 'No mpv instance is running')
        if not self._player.seekable:
            return (None, 'The resource is not seekable')
        pos = min(self._player.time_pos+self._player.time_remaining,
                  max(0, position))
        self._player.time_pos = pos
        return { 'position': pos }

    @action
    def back(self, offset=60.0):
        """ Back by (default: 60) seconds """
        if not self._player:
            return (None, 'No mpv instance is running')
        if not self._player.seekable:
            return (None, 'The resource is not seekable')
        pos = max(0, self._player.time_pos-offset)
        return self.seek(pos)

    @action
    def forward(self, offset=60.0):
        """ Forward by (default: 60) seconds """
        if not self._player:
            return (None, 'No mpv instance is running')
        if not self._player.seekable:
            return (None, 'The resource is not seekable')
        pos = min(self._player.time_pos+self._player.time_remaining,
                  self._player.time_pos+offset)
        return self.seek(pos)

    @action
    def next(self):
        """ Play the next item in the queue """
        if not self._player:
            return (None, 'No mpv instance is running')
        self._player.playlist_next()

    @action
    def prev(self):
        """ Play the previous item in the queue """
        if not self._player:
            return (None, 'No mpv instance is running')
        self._player.playlist_prev()

    @action
    def toggle_subtitles(self, visibile=None):
        """ Toggle the subtitles visibility """
        return self.toggle_property('sub_visibility')

    @action
    def toggle_fullscreen(self, fullscreen=None):
        """ Toggle the fullscreen mode """
        return self.toggle_property('fullscreen')

    @action
    def toggle_property(self, property):
        """
        Toggle or sets the value of an mpv property (e.g. fullscreen,
        sub_visibility etc.). See ``man mpv`` for a full list of properties

        :param property: Property to toggle
        """
        if not self._player:
            return (None, 'No mpv instance is running')

        if not hasattr(self._player, property):
            self.logger.warning('No such mpv property: {}'.format(property))

        value = not getattr(self._player, property)
        setattr(self._player, property, value)
        return { property: value }

    @action
    def get_property(self, property):
        """
        Get a player property (e.g. pause, fullscreen etc.). See
        ``man mpv`` for a full list of the available properties
        """
        if not self._player:
            return (None, 'No mpv instance is running')
        return getattr(self._player, property)

    @action
    def set_property(self, **props):
        """
        Set the value of an mpv property (e.g. fullscreen, sub_visibility
        etc.). See ``man mpv`` for a full list of properties

        :param props: Key-value args for the properties to set
        :type props: dict
        """
        if not self._player:
            return (None, 'No mpv instance is running')

        for k,v in props:
            setattr(self._player, k, v)
        return props

    @action
    def set_subtitles(self, filename):
        """ Sets media subtitles from filename """
        return self.set_property(subfile=filename, sub_visibility=True)

    @action
    def remove_subtitles(self):
        """ Removes (hides) the subtitles """
        if not self._player:
            return (None, 'No mpv instance is running')
        self._player.sub_visibility = False

    @action
    def is_playing(self):
        """
        :returns: True if it's playing, False otherwise
        """
        if not self._player:
            return False
        return not self._player.pause

    @action
    def load(self, resource, **args):
        """
        Load/queue a resource/video to the player
        """
        if not self._player:
            return self.play(resource, **args)
        return self.loadfile(resource, mode='append-play', **args)

    @action
    def mute(self):
        """ Toggle mute state """
        if not self._player:
            return (None, 'No mpv instance is running')
        mute = not self._player.mute
        self._player.mute = mute
        return { 'muted': mute }

    @action
    def set_position(self, position):
        """
        Seek backward/forward to the specified absolute position (same as ``seek``)
        """
        return self.seek(position)

    @action
    def status(self):
        """
        Get the current player state.

        :returns: A dictionary containing the current state.

        Example::

            output = {
                "filename": "filename or stream URL",
                "state": "play"  # or "stop" or "pause"
            }
        """
        if not self._player or not hasattr(self._player, 'pause'):
            return { 'state': PlayerState.STOP.value }

        return {
            'filename': self._get_current_resource(),
            'state': (PlayerState.PAUSE.value if self._player.pause else
                      PlayerState.PLAY.value),
        }

    def _get_current_resource(self):
        if not self._player or not self._player.stream_path:
            return

        return ('file://' if os.path.isfile(self._player.stream_path)
                else '') + self._player.stream_path



# vim:sw=4:ts=4:et: