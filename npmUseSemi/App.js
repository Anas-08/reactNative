import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import CheckTest from './screens/Check';
import RadioTest from './screens/Radio';
import ToastTest from './screens/Toast';
import ProductFilterScreen from './screens/ProductFilter';
import ProfileSettingsScreen from './screens/ProfileSettings';
import FeedbackFormScreen from './screens/FeedBackForm';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
    //  initialRouteName='Check'
    //  initialRouteName='Radio'
     initialRouteName='ProductFilter'
      screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />

      
      <Stack.Screen name="Check" component={CheckTest} />
      <Stack.Screen name="Radio" component={RadioTest} />
      <Stack.Screen name="Toast" component={ToastTest} />
      
      
      <Stack.Screen name="ProductFilter" component={ProductFilterScreen} />
      <Stack.Screen name="ProfileSettingsScreen" component={ProfileSettingsScreen} />
      <Stack.Screen name="FeedbackFormScreen" component={FeedbackFormScreen} />


    </Stack.Navigator>
  </NavigationContainer>
);

export default App;