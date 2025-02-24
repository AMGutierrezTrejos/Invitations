/* eslint-disable prettier/prettier */
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const events = [
  {
    id: 1,
    image: require('../assets/images/1.jpg'),
  },
  {
    id: 2,
    image: require('../assets/images/2.jpg'),
  },
  {
    id: 3,
    image: require('../assets/images/3.jpg'),
  },
  {
    id: 4,
    image: require('../assets/images/4.jpg'),
  },
  {
    id: 5,
    image: require('../assets/images/5.jpg'),
  },
  {
    id: 6,
    image: require('../assets/images/6.jpg'),
  },
  {
    id: 7,
    image: require('../assets/images/7.jpg'),
  },
  {
    id: 8,
    image: require('../assets/images/8.jpg'),
  },
];

export default function WelcomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onButtonPress = () => {
    setActiveIndex(activeIndex >= events.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <View className="flex-1 items-center bg-yellow-950">
      <Animated.Image
        key={events[activeIndex].image}
        source={events[activeIndex].image}
        className="absolute left-0 top-0 h-full w-full"
        resizeMode="cover"
        entering={FadeIn.duration(1000)}
        exiting={FadeOut.duration(1000)}
      />
      <View className="absolute left-0 top-0 bg-black/70" />

      <BlurView intensity={50}>
        <SafeAreaView>
          <View className="h-3/5 w-full ">
            <ScrollView horizontal>
              {events.map((event) => (
                <View className="h-full w-96 p-5 shadow-md">
                  <Image source={event.image} className="h-full w-full rounded-3xl" />
                </View>
              ))}
            </ScrollView>
          </View>
          <View className="flex-1 justify-center gap-4 p-4">
            <Text className="text-center text-2xl font-bold text-white/80">Welcome to</Text>
            <Text className="text-center text-5xl font-bold text-white">AMGT Invites</Text>
            <Text className="mb-5 text-center text-lg text-white/80">
              Create beautiful invitations for your events. Anyone can receive invitations.{' '}
            </Text>
            <Pressable
              onPress={onButtonPress}
              className=" items-center self-center rounded-full bg-white px-10 py-4">
              <Text className="text-lg ">Create an Event</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </BlurView>
    </View>
  );
}
