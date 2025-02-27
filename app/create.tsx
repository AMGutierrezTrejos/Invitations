/* eslint-disable prettier/prettier */
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Create() {
  const { top, bottom } = useSafeAreaInsets();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#FF0000', '#FF69B4', '#800080', '#00008B']}
        style={StyleSheet.absoluteFill}
      />
      <View className="p-4" style={{ paddingTop: top, paddingBottom: bottom }}>
        {/* Header */}
        <View className="mt-4 flex-row items-center justify-between">
          <Ionicons
            onPress={() => router.back()}
            name="close"
            size={24}
            color="white"
            className="rounded-full bg-zinc-700/40 p-4"
          />
          <Pressable className="rounded-full bg-white p-3 px-6">
            <Text className="font-bold text-zinc-900">Preview</Text>
          </Pressable>
        </View>
        {/* Image Picker */}
        <View className="h-1/2 w-full items-center justify-center gap-4">
          <Ionicons name="image" size={42} color="rgba(255, 255, 255, 0.7)" />
          <Pressable className="rounded-full bg-black/10 p-3 px-6">
            <Text className="font-bold text-white/90">Choose an image</Text>
          </Pressable>
        </View>
        {/* Event Name */}
        <View className="shadow-lg">
          <BlurView
            intensity={10}
            className="w-full gap-4 overflow-hidden rounded-3xl border border-white/15">
            <View className=" bg-black/30">
              <View className="border-b border-white/15 p-4 py-8">
                <TextInput
                  value={title}
                  onChangeText={setTitle}
                  placeholder="Event Title"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  className="text-center text-4xl font-bold text-white"
                />
              </View>
              {/* Date and Time */}
              <View className="items-center gap-4 border-b border-white/15 p-4">
                <Ionicons name="calendar" size={24} color="rgba(255, 255, 255, 0.8)" />
                <Text className="font-medium text-white/80">Date and Time</Text>
              </View>
              {/* Date and Time */}
              <View className="items-center gap-4 border-b border-white/15 p-4">
                <Ionicons name="location" size={24} color="rgba(255, 255, 255, 0.8)" />
                <Text className="font-medium text-white/80">Location</Text>
              </View>
            </View>
          </BlurView>
        </View>
      </View>
    </View>
  );
}
