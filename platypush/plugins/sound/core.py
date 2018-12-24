class Sound(object):
    """
    Class model a synthetic sound that can be played through the audio device
    """

    STANDARD_A_FREQUENCY = 440.0
    STANDARD_A_MIDI_NOTE = 69
    _DEFAULT_BLOCKSIZE = 2048
    _DEFAULT_BUFSIZE = 20
    _DEFAULT_SAMPLERATE = 44100

    midi_note = None
    frequency = None
    gain = 1.0
    duration = None

    def __init__(self, midi_note=midi_note, frequency=None, gain=gain,
                 duration=duration, A_frequency=STANDARD_A_FREQUENCY):
        """
        You can construct a sound either from a MIDI note or a base frequency

        :param midi_note: MIDI note code, see
            https://newt.phys.unsw.edu.au/jw/graphics/notes.GIF
        :type midi_note: int

        :param frequency: Sound base frequency in Hz
        :type frequency: float

        :param gain: Note gain/volume between 0.0 and 1.0 (default: 1.0)
        :type gain: float

        :param duration: Note duration in seconds. Default: keep until
            release/pause/stop
        :type duration: float

        :param A_frequency: Reference A4 frequency (default: 440 Hz)
        :type A_frequency: float
        """

        if midi_note and frequency:
            raise RuntimeError('Please specify either a MIDI note or a base ' +
                               'frequency')

        if midi_note:
            self.midi_note = midi_note
            self.frequency = self.note_to_freq(midi_note=midi_note,
                                               A_frequency=A_frequency)
        elif frequency:
            self.frequency = frequency
            self.midi_note = self.freq_to_note(frequency=frequency,
                                               A_frequency=A_frequency)
        else:
            raise RuntimeError('Please specify either a MIDI note or a base ' +
                               'frequency')

        self.gain = gain
        self.duration = duration

    @classmethod
    def note_to_freq(cls, midi_note, A_frequency=STANDARD_A_FREQUENCY):
        """
        Converts a MIDI note to its frequency in Hz

        :param midi_note: MIDI note to convert
        :type midi_note: int

        :param A_frequency: Reference A4 frequency (default: 440 Hz)
        :type A_frequency: float
        """

        return (2.0 ** ((midi_note - cls.STANDARD_A_MIDI_NOTE) / 12.0)) \
            * A_frequency

    @classmethod
    def freq_to_note(cls, frequency, A_frequency=STANDARD_A_FREQUENCY):
        """
        Converts a frequency in Hz to its closest MIDI note

        :param frequency: Frequency in Hz
        :type midi_note: float

        :param A_frequency: Reference A4 frequency (default: 440 Hz)
        :type A_frequency: float
        """

        # TODO return also the offset in % between the provided frequency
        # and the standard MIDI note frequency
        return int(12.0 * math.log(frequency/A_frequency, 2)
                   + cls.STANDARD_A_MIDI_NOTE)

    def get_wave(self, t_start=0., t_end=0., samplerate=_DEFAULT_SAMPLERATE):
        """
        Get the wave binary data associated to this sound

        :param t_start: Start offset for the sine wave in seconds. Default: 0
        :type t_start: float

        :param t_end: End offset for the sine wave in seconds. Default: 0
        :type t_end: float

        :param samplerate: Audio sample rate. Default: 44100 Hz
        :type samplerate: int

        :returns: A numpy.ndarray[n,1] with the raw float values
        """

        import numpy as np
        x = np.linspace(t_start, t_end, int((t_end-t_start)*samplerate))

        x = x.reshape(len(x), 1)
        return self.gain * np.sin(2 * np.pi * self.frequency * x)


    def __str__(self):
        import json

        return json.dumps({
            'midi_note': midi_note,
            'frequency': frequency,
            'gain': gain,
            'duration': duration,
        })

    @classmethod
    def build(cls, *args, **kwargs):
        """
        Construct a sound object either from a JSON representation or a
        key-value representation
        """

        import json

        if args:
            if isinstance(args[0], cls):
                return args[0]
            if isinstance(args[0], str):
                kwargs = json.loads(args[0])
            elif isinstance(args[0], dict):
                kwargs = args[0]
        if kwargs:
            return Sound(**kwargs)

        raise RuntimeError('Usage: {}'.format(__doc__))


# vim:sw=4:ts=4:et:
