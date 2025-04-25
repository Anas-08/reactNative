import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {
  CustomCheckboxGroup,
  CustomCheckBoxGroup,
  CustomToastComponent,
} from 'react-native-ui-anas';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();
  const [agree, setAgree] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const handleStart = () => {
    if (!agree.includes('agree')) {
      setShowToast(true);
      return;
    }
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Quiz App!</Text>

      {/* <CustomCheckBoxGroup
        options={[{ label: 'I agree to the terms & conditions', value: 'agree' }]}
        selectedValues={agree}
        onChange={(values) => setAgree(values)}
        color="black"
        type="square"
        size={30}
        showCheckmark={true}
        sizeMode="center"
      /> */}

   <View style={{ }} >
        <CustomCheckboxGroup
        options={[{ label: 'I agree to the terms & conditions', value: 'agree' }]}
        selectedValues={agree}
        onChange={(values) => setAgree(values)}
        color="black"
              type="square"
        size={25}
        showCheckmark={true}
              // sizeMode="center"
              sizeMode="center"
      />
   </View>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>

      <CustomToastComponent
        message="Please select the agreement first!"
        position="bottom"
        duration={3000}
        backgroundColor="#f44336"
        textColor="#fff"
        showProgressBar={true}
        visible={showToast}
        onHide={() => setShowToast(false)}
      />
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 40,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: "100%",
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});