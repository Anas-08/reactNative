import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'

const Feed = () => {
  return (
    <>
    <Stack.Screen options={{ headerTitle: "Feed" }} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text style={{ fontSize: 22, fontWeight: '700' }} >Feed Screen</Text>
      <Button title='Back' onPress={()=> router.back()} />
    </View>
    </>
  )
}

export default Feed

const styles = StyleSheet.create({})