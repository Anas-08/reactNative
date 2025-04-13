import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Tabs } from 'expo-router'
import {Feather, AntDesign} from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: true }} >
        <Tabs.Screen 
            name='feed'
            options={{
                tabBarIcon: ({color})=> (
                    <Feather name="list" size={24} color={color} />
                ),
                tabBarLabel: "Feed",
                headerRight: () => <Button title='Add new post' onPress={()=> router.push('/(tabs)/feed/new')} />,
            }}
        />
        <Tabs.Screen 
            name='profile'
            options={{
                tabBarIcon: ({color})=> (
                    <AntDesign name="user" size={24} color={color} />
                ),
                tabBarLabel: "Profile",
            }}
        />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})