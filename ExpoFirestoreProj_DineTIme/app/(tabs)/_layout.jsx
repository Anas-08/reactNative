import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }} >
        <Tabs.Screen name='home' options={{ 
          title: "Home", 
          tabBarIcon: (color) => <Ionicons  name='home-outline' size={24} color={color} />,  
          }} />

        <Tabs.Screen name='history' options={{ 
          title: "History",
          tabBarIcon: (color) => <Ionicons  name='reload-outline' size={24} color={color} />,    
        }} />

        <Tabs.Screen name='profile' options={{ 
          title: "Profile",
          tabBarIcon: (color) => <Ionicons  name='person-outline' size={24} color={color} />,    
          
        }} />

    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})