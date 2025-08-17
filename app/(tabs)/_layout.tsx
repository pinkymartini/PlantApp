// app/(tabs)/_layout.tsx
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Image, Platform, Pressable } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { useColorScheme } from '@/hooks/useColorScheme';
import { scale } from '@/utils/scale';



function CenterCameraButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={12}
      style={{
        top: scale(-20),
     
      }}
    >
      <Image source={require('@/assets/icons/scanButton.png')} style={{ width: scale(74), height: scale(64) }} resizeMode="contain" />
    </Pressable>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        
        tabBarActiveTintColor: '#19A061',
        tabBarInactiveTintColor: '#979798',
        tabBarButton: HapticTab, 
        tabBarShowLabel: true,
   
        tabBarLabelStyle: { fontFamily: 'Rubik', fontSize: scale(10), fontWeight:'400' },
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', 
            height: 72,
            paddingBottom: 10,
            paddingTop: 6,
            backgroundColor:'#FFFFFFEB'
          },
          default: {
            height: 72,
            paddingBottom: 10,
            paddingTop: 6,
            backgroundColor:'#FFFFFFEB'
          },

          
        }, ),
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
                source={require('@/assets/icons/homeIcon.png')}
                style={{ width: scale(24), height: scale(24), tintColor: focused ? '#19A061' : '#BDBDBD' }}
                resizeMode="contain"
              />
          ),
          
        }}
      />

      <Tabs.Screen
        name="diagnose"
        options={{
          title: 'Diagnose',
          tabBarIcon: ({ focused }) => (
            <Image
                source={require('@/assets/icons/Vector.png')}
                style={{ width: scale(24), height: scale(24), tintColor: focused ? '#19A061' : '#BDBDBD' }}
                resizeMode="contain"
              />
          ),
          
        }}
      />

    
      <Tabs.Screen
  name="camerabutton"
  options={{
    title: '',
    tabBarLabel: () => null,
    tabBarIcon: () => null,
    tabBarButton: () => (
      <CenterCameraButton onPress={() => router.push('/(modals)/camera')} />
    ),
  }}
/>

      <Tabs.Screen
        name="mygarden"
        options={{
          title: 'My Garden',
          tabBarIcon: ({ focused }) => (
             <Image
                source={require('@/assets/icons/myGarden.png')}
                style={{ width: scale(24), height: scale(24), tintColor: focused ? '#19A061' : '#BDBDBD' }}
                resizeMode="contain"
              />
          ),
          
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
                source={require('@/assets/icons/profile.png')}
                style={{ width: scale(24), height: scale(24), tintColor: focused ? '#19A061' : '#BDBDBD' }}
                resizeMode="contain"
              />
          ),
        }}
      />
    </Tabs>
  );
}