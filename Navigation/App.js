import "./gesture-handler.native"
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Routes from "./src/navigations/routes/Routes"
import AuthStack from "./src/navigations/newRoutes/AuthStack"
import RoutesResponsive from "./src/navigations/newRoutes/RoutesResponsive"

const App = () => {
  
  return (
    <>
      {/* <Text>App</Text> */}
      {/* <MyStack/> */}
      {/* <MyDrawer/> */}
      {/* <Routes /> */}

      {/* <Text>Text</Text> */}
      {/* NOTE: below there are new files and folder created for responsive testing (don't confuse with double name )*/}
      {/* <AuthStack/> */}
      <RoutesResponsive/>

    </>
  )
}

export default App

const styles = StyleSheet.create({})