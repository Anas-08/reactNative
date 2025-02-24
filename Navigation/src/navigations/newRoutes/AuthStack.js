// Auth Screens

import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { LoginResponsive, RegisterResponsive, ChooseAccount, SetPassword, ForgotPassword } from "../../screens/ResponsiveTest";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationResponsiveString from '../../constants/navigationResponsiveString';



const AuthStack = () => {
  const Stack  = createStackNavigator();
  return (
    // <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={navigationResponsiveString.login} >
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={navigationResponsiveString.register} >
      <Stack.Screen name={navigationResponsiveString.login} component={LoginResponsive}  />
      <Stack.Screen name={navigationResponsiveString.register} component={RegisterResponsive}  />
      <Stack.Screen name={navigationResponsiveString.chooseAccount} component={ChooseAccount}  />
      <Stack.Screen name={navigationResponsiveString.setPassword} component={SetPassword}  />
      <Stack.Screen name={navigationResponsiveString.forgotPassword} component={ForgotPassword}  />
    </Stack.Navigator>
  )
}

export default AuthStack