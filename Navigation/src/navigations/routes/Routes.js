import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../../screens/Home'
import Login from '../../screens/Login'

import ProductDetail from '../../screens/ProductDetail'
import CustomDrawer from '../cutomNavigation/MyDrawer/CustomDrawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Product from '../../screens/Product'
import About from '../../screens/About'
import Todo from '../../screens/Todo'
import StopWatch from '../../screens/StopWatch'
import ImagePic from '../../screens/ImagePic'

const MyBottom = () => {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false, tabBarIcon: ({focused, size, color}) => ( <Image source={require("../../assets/images/icons/home.png")} style={{ width: size, height: size }} /> ) }} />
      <Tab.Screen name='Product' component={Product} options={{headerShown: false, tabBarIcon: ({focused, size, color}) => ( <Image source={require("../../assets/images/icons/home.png")} style={{ width: size, height: size }} /> ) }} />
      <Tab.Screen name='Todo' component={Todo} options={{headerShown: false, tabBarIcon: ({focused, size, color}) => ( <Image source={require("../../assets/images/icons/feed-50.png")} style={{ width: size, height: size }} /> ) }} />
      <Tab.Screen name='StopWatch' component={StopWatch} options={{headerShown: false, tabBarIcon: ({focused, size, color}) => ( <Image source={require("../../assets/images/icons/feed-50.png")} style={{ width: size, height: size }} /> ) }} />
      <Tab.Screen name='Image' component={ImagePic} options={{headerShown: false, tabBarIcon: ({focused, size, color}) => ( <Image source={require("../../assets/images/icons/feed-50.png")} style={{ width: size, height: size }} /> ) }} />
    </Tab.Navigator>
  )
}


const MyDrawer = () => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator screenOptions={{ 
      drawerType:"slide",  
      drawerActiveTintColor: '#6200ea',
      drawerInactiveTintColor: '#333',
      // headerShown: false, 
      drawerItemStyle:{
        borderRadius: 8,
        marginBlock: 4,
        borderWidth:1,
      }
      }} 
      drawerContent={(props)=> (<CustomDrawer {...props} />)} 
      >

      <Drawer.Screen name='HomeDrawer' component={MyBottom} options={{ drawerIcon: ()=> (<Image source={require("../../assets/images/icons/home.png")} style={styles.iconStyle} />) }} />
      <Drawer.Screen name='About' component={About} options={{ drawerIcon: ()=> (<Image source={require("../../assets/images/icons/about-50.png")} style={styles.iconStyle}  />) }} />
      {/* <Drawer.Screen name='More' component={MyBottom} options={{ drawerIcon: ()=> (<Image source={require("../../../public/images/icons/menu-50.png")} style={styles.iconStyle}  />) }} /> */}
    
    </Drawer.Navigator>
  )
}


const MyStack = () => {
    const Stack = createStackNavigator()
    return (
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Home' component={MyDrawer} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
      </Stack.Navigator>
    )
}

const Routes = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({
    iconStyle: {
        width:18,
        height:18,
    }
})