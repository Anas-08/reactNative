import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';

const App = () => {

  useEffect(() => {
    checkPermission();
    console.log("App")
    // setTimeout(
    //   onDisplayNotification
    // ,3000)
  }, []);
  // useEffect(() => {
  //   checkPermission();
  //   console.log("App")
  //   setTimeout(()=>{
  //     console.log("inside time before")
  //     onDisplayNotification()
  //     console.log("inside time after")
  //   },3000)
  // }, []);

  const checkPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const permissionStatus = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );
      console.log('Permission status ---> ', permissionStatus);
      if (permissionStatus) {
        Alert.alert('Permission already granted');
        getToken();
      } else {
        requestPermission();
      }
    } else {
      Alert.alert('Notifications enabled by default');
      getToken();
    }
  };

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'Notification Permission',
          message: 'This app needs permission to send notifications.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      console.log('Permission result ---> ', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission granted...');
        getToken();
      } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
        Alert.alert('Permission denied...', 'Please enable notifications in your app settings.');
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
          'Permission denied',
          'Please enable notifications from Settings > Apps > Your App > Notifications.'
        );
      }
    } catch (error) {
      console.error('Permission request error ---> ', error);
      Alert.alert('Error', 'Failed to request permission.');
    }
  };

  const getToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log('FCM token ---> ', token);
    } catch (error) {
      console.error('FCM token error ---> ', error);
      Alert.alert('Error', 'Failed to get FCM token.');
    }
  };

  async function onDisplayNotification() {
    console.log("onDisplayNotification")
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'ic_small_icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        importance: AndroidImportance.HIGH,
        
      },
    });
  }

  return (
    <View>
      <Text>App</Text>

      <Button title='Click ME' onPress={()=> onDisplayNotification()}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})