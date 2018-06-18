import time

import Leap

from platypush.backend import Backend
from platypush.context import get_backend
from platypush.message.event.sensor.leap import LeapFrameEvent, \
    LeapFrameStartEvent, LeapFrameStopEvent, LeapConnectEvent, LeapDisconnectEvent


class SensorLeapBackend(Backend):
    """
    Backend for events generated using a Leap Motion device to track hands and
    gestures, https://www.leapmotion.com/

    Note that the default SDK is not compatible with Python 3. Follow the
    instructions on https://github.com/BlackLight/leap-sdk-python3 to build the
    Python 3 module.

    Also, you'll need the Leap driver and utils installed on your OS (follow
    instructions at https://www.leapmotion.com/setup/) and the `leapd` daemon
    running to recognize your controller.
    """

    def __init__(self,
                 position_ranges=[
                     [-300.0, 300.0],  # x axis
                     [25.0, 600.0],    # y axis
                     [-300.0, 300.0],  # z axis
                 ],
                 position_tolerance=0.0,  # Position variation tolerance in %
                 *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.position_ranges = position_ranges
        self.position_tolerance = position_tolerance


    def run(self):
        super().run()

        listener = LeapListener(position_ranges=self.position_ranges,
                                position_tolerance=self.position_tolerance)

        controller = Leap.Controller()

        if not controller:
            raise RuntimeError('No Leap Motion controller found - is your ' +
                               'device connected and is leapd running?')

        controller.add_listener(listener)
        self.logger.info('Leap Motion backend initialized')

        try:
            while not self.should_stop():
                time.sleep(0.1)
        finally:
            controller.remove_listener(listener)



class LeapListener(Leap.Listener):
    def __init__(self, position_ranges, position_tolerance, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.prev_frame = None
        self.position_ranges = position_ranges
        self.position_tolerance = position_tolerance


    def send_event(self, event):
        backend = get_backend('redis')
        if not backend:
            self.logger.warning('Redis backend not configured, I cannot propagate the following event: {}'.format(event))
            return

        backend.send_message(event)


    def on_init(self, controller):
        self.prev_frame = None
        self.logger.info('Leap controller listener initialized')

    def on_connect(self, controller):
        self.logger.info('Leap controller connected')
        self.prev_frame = None
        self.send_event(LeapConnectEvent())

    def on_disconnect(self, controller):
        self.logger.info('Leap controller disconnected')
        self.prev_frame = None
        self.send_event(LeapDisconnectEvent())

    def on_exit(self, controller):
        self.logger.info('Leap listener terminated')

    def on_frame(self, controller):
        frame = controller.frame()

        if len(frame.hands) > 0:
            hands = self._flatten_hands(frame)
            if hands:
                if not self.prev_frame:
                    self.send_event(LeapFrameStartEvent())
                self.send_event(LeapFrameEvent(hands=hands))
            self.prev_frame = frame
        else:
            if self.prev_frame:
                self.send_event(LeapFrameStopEvent())
            self.prev_frame = None

    def _flatten_hands(self, frame):
        return [
            {
                'confidence': hand.confidence,
                'direction': [hand.direction[0], hand.direction[1], hand.direction[2]],
                'id': hand.id,
                'is_left': hand.is_left,
                'is_right': hand.is_right,
                'palm_normal': [hand.palm_normal[0], hand.palm_normal[1], hand.palm_normal[2]],
                'palm_position': self._normalize_position(hand.palm_position),
                'palm_velocity': [hand.palm_velocity[0], hand.palm_velocity[1], hand.palm_velocity[2]],
                'palm_width': hand.palm_width,
                'sphere_center': [hand.sphere_center[0], hand.sphere_center[1], hand.sphere_center[2]],
                'sphere_radius': hand.sphere_radius,
                'stabilized_palm_position': self._normalize_position(hand.stabilized_palm_position),
                'time_visible': hand.time_visible,
                'wrist_position': self._normalize_position(hand.wrist_position),
            }
            for i, hand in enumerate(frame.hands)
            if hand.is_valid and (
                len(frame.hands) != len(self.prev_frame.hands) or
                self._position_changed(
                    old_position=self.prev_frame.hands[i].stabilized_palm_position,
                    new_position=hand.stabilized_palm_position)

                if self.prev_frame
                else True
            )
        ]

    def _normalize_position(self, position):
        # Normalize absolute position onto a semisphere centered in (0,0)
        # having x_range = z_range = [-100, 100], y_range = [0, 100]

        return [
            self._scale_scalar(value=position[0], range=self.position_ranges[0], new_range=[-100.0, 100.0]),
            self._scale_scalar(value=position[1], range=self.position_ranges[1], new_range=[0.0, 100.0]),
            self._scale_scalar(value=position[2], range=self.position_ranges[2], new_range=[-100.0, 100.0]),
        ]


    def _scale_scalar(self, value, range, new_range):
        if value < range[0]: value=range[0]
        if value > range[1]: value=range[1]
        return ((new_range[1]-new_range[0])/(range[1]-range[0]))*(value-range[0]) + new_range[0]


    def _position_changed(self, old_position, new_position):
        return (
            abs(old_position[0]-new_position[0]) > self.position_tolerance or
            abs(old_position[1]-new_position[1]) > self.position_tolerance or
            abs(old_position[2]-new_position[2]) > self.position_tolerance)


# vim:sw=4:ts=4:et:
