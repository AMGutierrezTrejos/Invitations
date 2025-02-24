/* eslint-disable prettier/prettier */
import { Image, ScrollView, View } from 'react-native';

const itemWidth = 250;

function MarqueeItem({ event, index }: { event: any; index: number }) {
  const initialPosition = itemWidth * index;
  return (
    <View
      className="absolute h-full bg-purple-700/50 p-5 shadow-md"
      style={{ left: initialPosition, width: itemWidth }}>
      <Image source={event.image} className="h-full w-full rounded-3xl" />
    </View>
  );
}

export default function Marquee({ events }: { events: any[] }) {
  return (
    <View className="h-full flex-row">
      {events.map((event, index) => (
        <MarqueeItem key={event.id} event={event} index={index} />
      ))}
    </View>
  );
}
