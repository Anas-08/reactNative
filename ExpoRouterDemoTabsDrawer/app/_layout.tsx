import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'

const _layout = () => {
  return (
        // <Stack />
        <Stack>
            <Stack.Screen 
                name='index' 
                options={{ headerTitle: "Home", headerRight: ()=> <Button title='Contact' onPress={()=> router.push('/contact')} /> }} 
            />
            <Stack.Screen 
                name='about' 
                options={{ headerTitle: "About" }} 
            />
            <Stack.Screen 
                name='blog/index' 
                options={{ headerTitle: "All Blogs" }} 
            />
            <Stack.Screen 
                name='contact' 
                options={{ headerTitle: "Contacts", presentation: "modal" }} 
            />
            <Stack.Screen 
                name='(drawer)' 
                options={{ headerShown: false }} 
            />
            {/* <Stack.Screen 
                name='(tabs)' 
                options={{ headerShown: false }} 
            /> */}
        </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})