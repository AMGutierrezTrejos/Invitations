/* eslint-disable prettier/prettier */
import { Image, useWindowDimensions, View } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type MarqueeItemProps = {
  event: any;
  index: number;
  scroll: SharedValue<number>;
  containerWidth: number;
  itemWidth: number;
};

function MarqueeItem({ event, index, scroll, containerWidth, itemWidth }: MarqueeItemProps) {
  const { width: screenWidth } = useWindowDimensions();
  const shift = (containerWidth - screenWidth) / 2;
  const initialPosition = itemWidth * index - shift;
  const animatedStyle = useAnimatedStyle(() => {
    const position = ((initialPosition - scroll.value) % containerWidth) + shift;

    return {
      left: position,
    };
  });

  return (
    <Animated.View
      className="absolute h-full  p-3 shadow-md"
      style={[{ width: itemWidth }, animatedStyle]}>
      <Image source={event.image} className="h-full w-full rounded-3xl" />
    </Animated.View>
  );
}

export default function Marquee({ events }: { events: any[] }) {
  const scroll = useSharedValue(0);
  const scrollSpeed = useSharedValue(50);
  const { width: screenWidth } = useWindowDimensions();
  const itemWidth = screenWidth * 0.65;

  const containerWidth = events.length * itemWidth;

  useFrameCallback((frameInfo) => {
    const deltaSeconds = (frameInfo.timeSincePreviousFrame ?? 0) / 1000;
    scroll.value = scroll.value + scrollSpeed.value * deltaSeconds;
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      scrollSpeed.value = 0;
    })
    .onChange((event) => {
      scroll.value = scroll.value + event.changeX;
    })
    .onFinalize((event) => {
      scrollSpeed.value = -event.velocityX;
      scrollSpeed.value = withTiming(50, { duration: 1000, easing: Easing.out(Easing.quad) });
    });

  return (
    <GestureDetector gesture={gesture}>
      <View className="h-full flex-row">
        {events.map((event, index) => (
          <MarqueeItem
            key={event.id}
            event={event}
            index={index}
            scroll={scroll}
            itemWidth={itemWidth}
            containerWidth={containerWidth}
          />
        ))}
      </View>
    </GestureDetector>
  );
}
