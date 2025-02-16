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
import { images } from '../../assets/images/icons/images'
import { iconStyle } from '../../common/styles/iconStyle'
import Main from '../../screens/Product/Main'

const MyBottom = () => {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name='Home' component={Home} options={{  tabBarIcon: () => ( <Image source={images.homeIcon} style={iconStyle.md} /> ) }} />
      {/* <Tab.Screen name='Product' component={Product} options={{ tabBarIcon: () => ( <Image source={images.productIcon} style={iconStyle.md} /> ) }} /> */}
      <Tab.Screen name='Product' component={Main} options={{ tabBarIcon: () => ( <Image source={images.productIcon} style={iconStyle.md} /> ) }} />
      <Tab.Screen name='Todo' component={Todo} options={{ tabBarIcon: () => ( <Image source={images.todoIcon} style={iconStyle.md} /> ) }} />
      <Tab.Screen name='StopWatch' component={StopWatch} options={{ tabBarIcon: () => ( <Image source={images.watchIcon} style={iconStyle.md} /> ) }} />
      <Tab.Screen name='Image' component={ImagePic} options={{ tabBarIcon: () => ( <Image source={images.imageIcon} style={iconStyle.md} /> ) }} />
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

      <Drawer.Screen name='HomeDrawer' component={MyBottom} options={{ drawerIcon: ()=> (<Image source={images.homeIcon} style={iconStyle.md} />) }} />
      <Drawer.Screen name='About' component={About} options={{ drawerIcon: ()=> (<Image source={images.aboutIcon} style={iconStyle.md}  />) }} />
      {/* <Drawer.Screen name='More' component={MyBottom} options={{ drawerIcon: ()=> (<Image source={require("../../../public/images/icons/menu-50.png")} style={styles.iconStyle}  />) }} /> */}
    
    </Drawer.Navigator>
  )
}


const MyStack = () => {
    const Stack = createStackNavigator()
    return (
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name='Home' component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
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

