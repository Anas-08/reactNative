import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const NewFeed = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text style={{ fontSize: 22, fontWeight: '700' }} >Add New Feed Screen</Text>
      <Button title='Back' onPress={()=> router.back()} />
    </View>
  )
}

export default NewFeed

const styles = StyleSheet.create({})