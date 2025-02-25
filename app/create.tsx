/* eslint-disable prettier/prettier */
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Create() {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#FF0000', '#FF69B4', '#800080', '#00008B']}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView>
        {/* Header */}
        <View>
          <Ionicons name="close" size={24} color="black" className="bg-zinc-700" />
        </View>
      </SafeAreaView>

      <Text>Create text</Text>
    </View>
  );
}
