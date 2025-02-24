/* eslint-disable prettier/prettier */
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center bg-yellow-950">
      <View className="h-3/5 w-full bg-gray-400">{/* Placeholder */}</View>
      <View className="flex-1 justify-center gap-4 p-4">
        <Text className="text-center text-2xl font-bold text-white/60">Welcome to</Text>
        <Text className="text-center text-5xl font-bold text-white">AMGT Invites</Text>
        <Text className="mb-5 text-center text-lg text-white/60">
          Create beautiful invitations for your events. Anyone can receive invitations.{' '}
        </Text>
        <Pressable className="items-center self-center rounded-full bg-white px-10 py-4">
          <Text className="text-lg ">Create an Event</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
