import "./gesture-handler.native"
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Routes from "./src/navigations/routes/Routes"

const App = () => {
  
  return (
    <>
      {/* <Text>App</Text> */}
      {/* <MyStack/> */}
      {/* <MyDrawer/> */}
      <Routes />
    </>
  )
}

export default App

const styles = StyleSheet.create({})