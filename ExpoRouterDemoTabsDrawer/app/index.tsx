import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text style={{ fontSize: 22, fontWeight: '700' }} >Home Screen Test</Text>
      <Link href={'/about'} > Go to About Page</Link>


      <Link href={'/blog'} asChild > 
        <Button title='Go to Blog Page'  />
      </Link>

      <Link href={'/contact'} asChild > 
        <Button title='Go Contact Page'  />
      </Link>

      <Link href={'/feed'} asChild > 
        <Button title='Go Feed Page'  />
      </Link>

    </View>
  )
}

export default Page

const styles = StyleSheet.create({})