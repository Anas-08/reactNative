import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormInsert from './src/components/FormInsert'
import FormOne from './src/CustomButttonIsChecked/FormOne'
import FormTwo from './src/CustomButtonId/FormTwo'

const App = () => {
  return (
    <View>
      <Text>App Test</Text>
      {/* <FormInsert/> */}

      {/* using isChecked */}
      <FormOne />


      {/* using Id*/}
      {/* <FormTwo/> */}
    </View>
  )
}

export default App

// eslint-disable-next-line semi
const styles = StyleSheet.create({})