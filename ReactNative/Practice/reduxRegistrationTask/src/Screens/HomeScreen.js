import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({route}) => {
  console.log("HomeScreen route ---> ", route)
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}



export default HomeScreen

const styles = StyleSheet.create({})