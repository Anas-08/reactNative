import './gesture-handler.native'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainForm from './src/Components/MainForm'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './src/Routes/MyStack/MyStack'
import MyDrawer from './src/Routes/MyDrawer/MyDrawer'


const App = () => {
  console.log("app..........")
  return (

    <NavigationContainer>
      
      {/* <MainForm/> */}
      {/* <Text>App Redux</Text> */}
      
      {/* navigation */}
      {/* <MyStack />  */}
    <MyDrawer/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})