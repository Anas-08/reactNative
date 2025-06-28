import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomToast from './src1/Test_01/CustomToastComponent'
import ResponsiveExample from './src1/Example_01/ResponsiveExample';
import ProductFilterScreen from './src1/Example_01/SecondExample';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView  style={{ flex: 1, }} >
          {/* <Button title="Show Toast" onPress={() => {setVisible(true); console.log("btn press")}} /> */}
      <CustomToast
        visible={visible}
        // message="Custom toast message here!"
        message="Success..."
        showCloseButton={true}
        duration={4000}
        position="top"
        backgroundColor="#6200ee"
        textColor="#fff"
        onClose={() => setVisible(false)}
      />

    {/* <ResponsiveExample/> */}

    <ProductFilterScreen/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})