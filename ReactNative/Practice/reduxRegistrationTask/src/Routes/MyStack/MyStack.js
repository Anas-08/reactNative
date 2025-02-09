import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../Screens/HomeScreen'
import LoginScreen from '../../Screens/LoginScreen'

const MyStack = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default MyStack

const styles = StyleSheet.create({})