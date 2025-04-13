import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const About = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text style={{ fontSize: 22, fontWeight: '700' }} >About Screen</Text>
      <Button title='Back' onPress={()=> router.back()} />
    </View>
  )
}

export default About

const styles = StyleSheet.create({})