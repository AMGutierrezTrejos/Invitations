/* eslint-disable prettier/prettier */
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { FadeIn, FadeInUp, FadeOut, SlideInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import EventCard from '~/components/EventCard';
import Marquee from '~/components/Marquee';

const events = [
  {
    id: 1,
    image: require('../assets/images/1.jpg'),
    title: 'Birthday Party',
  },
  {
    id: 2,
    image: require('../assets/images/2.jpg'),
    title: 'wedding Party',
  },
  {
    id: 3,
    image: require('../assets/images/3.jpg'),
    title: 'Disco Party',
  },
  {
    id: 4,
    image: require('../assets/images/4.jpg'),
    title: 'Love Party',
  },
  {
    id: 5,
    image: require('../assets/images/5.jpg'),
    title: 'Pool Party',
  },
  {
    id: 6,
    image: require('../assets/images/6.jpg'),
    title: 'Traditional Party',
  },
  {
    id: 7,
    image: require('../assets/images/7.jpg'),
    title: 'Dessert Party',
  },
  {
    id: 8,
    image: require('../assets/images/8.jpg'),
    title: 'Concert Party',
  },
];

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function WelcomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onButtonPress = () => {
    router.push('/create');
  };

  return (
    <View className="flex-1  bg-yellow-950">
      <Animated.Image
        key={events[activeIndex].image}
        source={events[activeIndex].image}
        className="absolute left-0 top-0 h-full w-full"
        resizeMode="cover"
        entering={FadeIn.duration(1000)}
        exiting={FadeOut.duration(1000)}
      />
          <View className="absolute left-0 top-0 h-full w-full bg-black/70" />

      <BlurView intensity={70} className="flex-1">
        <SafeAreaView edges={['bottom']} className="flex-1">
          <Animated.View
            className="mt-20 h-1/2 w-full"
            entering={SlideInUp.springify().mass(1).damping(30)}>
            <Marquee
              items={events}
              renderItem={({ item }) => <EventCard event={item} />}
              onIndexChange={setActiveIndex}
            />
          </Animated.View>
          <View className="flex-1 justify-center gap-4 p-4">
            <Animated.Text
              className="text-center text-2xl font-bold text-white/60"
              entering={FadeInUp.springify().mass(1).damping(30).delay(500)}>
              Welcome to
            </Animated.Text>
            <Animated.Text
              className="text-center text-5xl font-bold text-white"
              entering={FadeIn.duration(500).delay(500)}>
              AMGT Invites
            </Animated.Text>
            <Animated.Text
              className="mb-5 text-center text-lg text-white/60"
              entering={FadeInUp.springify().mass(1).damping(30).delay(500)}>
              Create beautiful invitations for your events. Anyone can receive invitations.{' '}
            </Animated.Text>
            <AnimatedPressable
              onPress={onButtonPress}
              className=" items-center self-center rounded-full bg-white px-10 py-4"
              entering={FadeInUp.springify().mass(1).damping(30)}>
              <Text className="text-lg ">Create an Event</Text>
            </AnimatedPressable>
          </View>
        </SafeAreaView>
      </BlurView>
    </View>
  );
}
