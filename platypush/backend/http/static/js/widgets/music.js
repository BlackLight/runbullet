$(document).ready(function() {
    var $widget = $('.widget.music'),
        $trackContainer = $widget.find('.track-container'),
        $timeContainer = $widget.find('.time-container'),
        $noTrackElement = $trackContainer.find('.no-track-info'),
        $trackElement = $trackContainer.find('.track-info'),
        $artistElement = $trackElement.find('[data-bind=artist]'),
        $titleElement = $trackElement.find('[data-bind=title]'),
        $timeElapsedElement = $timeContainer.find('.time-elapsed'),
        $timeTotalElement = $timeContainer.find('.time-total'),
        $elapsedTimeBar = $widget.find('.time-bar > .elapsed'),
        timeElapsed,
        timeTotal,
        refreshElapsedInterval;

    var onEvent = function(event) {
        switch (event.args.type) {
            case 'platypush.message.event.music.NewPlayingTrackEvent':
                createNotification({
                    'icon': 'play',
                    'html': '<b>' + ('artist' in event.args.track ? event.args.track.artist : '')
                                  + '</b><br/>'
                                  + ('title' in event.args.track ? event.args.track.title : '[No name]'),
                });

            case 'platypush.message.event.music.MusicPlayEvent':
            case 'platypush.message.event.music.MusicPauseEvent':
                refreshTrack(event.args.track);

            case 'platypush.message.event.music.MusicStopEvent':
                refreshStatus(event.args.status);
                break;
        }
    };

    var initEvents = function() {
        window.registerEventListener(onEvent);
    };


    var setState = function(state) {
        if (state === 'play') {
            $noTrackElement.hide();
            $trackElement.show();
            $timeContainer.show();
        } else if (state === 'pause') {
            $noTrackElement.hide();
            $trackElement.show();
            $timeContainer.hide();
        } else if (state === 'stop') {
            $noTrackElement.show();
            $trackElement.hide();
            $timeContainer.hide();
        }
    };

    var secondsToTimeString = function(seconds) {
        seconds = parseInt(seconds);

        if (seconds) {
            return (parseInt(seconds/60) + ':' +
                (seconds%60 < 10 ? '0' : '') + seconds%60);
        } else {
            return '-:--';
        }
    };

    var setTrackTime = function(time) {
        $timeTotalElement.text(secondsToTimeString(time));
        timeTotal = parseInt(time);
    };

    var setTrackElapsed = function(time) {
        if (refreshElapsedInterval) {
            clearInterval(refreshElapsedInterval);
            refreshElapsedInterval = undefined;
        }

        timeElapsed = parseInt(time);
        $timeElapsedElement.text(secondsToTimeString(timeElapsed));

        var ratio = 100 * Math.min(timeElapsed/timeTotal, 1);
        $elapsedTimeBar.css('width', ratio + '%');

        refreshElapsedInterval = setInterval(function() {
            timeElapsed += 1;
            ratio = 100 * Math.min(timeElapsed/timeTotal, 1);
            $elapsedTimeBar.css('width', ratio + '%');
            $timeElapsedElement.text(secondsToTimeString(timeElapsed));
        }, 1000);
    };

    var refreshStatus = function(status) {
        setState(state=status.state);
        if ('elapsed' in status) {
            setTrackElapsed(status.elapsed);
        }
    };

    var refreshTrack = function(track) {
        setTrackTime(track.time);
        $artistElement.text(track.artist);
        $titleElement.text(track.title);
    };

    var initWidget = function() {
        $.when(
            execute({ type: 'request', action: 'music.mpd.currentsong' }),
            execute({ type: 'request', action: 'music.mpd.status' })
        ).done(function(t, s) {
            refreshTrack(t[0].response.output);
            refreshStatus(s[0].response.output);
        });
    };

    var init = function() {
        initEvents();
        initWidget();
    };

    init();
});

