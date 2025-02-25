/* eslint-disable prettier/prettier */
import { Image, ScrollView, View } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';

import { GestureDetector, Gesture } from 'react-native-gesture-handler';

const itemWidth = 250;

type MarqueeItemProps = { event: any; index: number; scroll: SharedValue<number> };

function MarqueeItem({ event, index, scroll }: MarqueeItemProps) {
  const initialPosition = itemWidth * index;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      left: initialPosition - scroll.value,
    };
  });

  return (
    <Animated.View
      className="absolute h-full  p-5 shadow-md"
      style={[{ width: itemWidth }, animatedStyle]}>
      <Image source={event.image} className="h-full w-full rounded-3xl" />
    </Animated.View>
  );
}

export default function Marquee({ events }: { events: any[] }) {
  const scroll = useSharedValue(0);
  const scrollSpeed = useSharedValue(50);

  useFrameCallback((frameInfo) => {
    const deltaSeconds = (frameInfo.timeSincePreviousFrame ?? 0) / 1000;
    scroll.value = scroll.value + scrollSpeed.value * deltaSeconds;
  });

  const gesture = Gesture.Pan()
    .onBegin((event) => {
      scrollSpeed.value = 0;
    })
    .onChange((event) => {
      scroll.value = scroll.value + event.changeX;
    })
    .onFinalize((event) => {
      scrollSpeed.value = 50;
    });

  return (
    <GestureDetector gesture={gesture}>
      <View className="h-full flex-row">
        {events.map((event, index) => (
          <MarqueeItem key={event.id} event={event} index={index} scroll={scroll} />
        ))}
      </View>
    </GestureDetector>
  );
}
