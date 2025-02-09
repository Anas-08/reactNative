import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../../Screens/HomeScreen'

const MyDrawer = () => {
    const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='HomeDrawer' component={HomeScreen}  />
    </Drawer.Navigator>
  )
}

export default MyDrawer

const styles = StyleSheet.create({})