import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator()



const MyBottomTabs = () => {
  return (
    <Tabs.Navigator>
      <Text>MyBottomTabs</Text>
    </Tabs.Navigator>
  )
}

export default MyBottomTabs

const styles = StyleSheet.create({})