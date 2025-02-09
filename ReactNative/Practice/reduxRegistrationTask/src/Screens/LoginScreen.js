import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Screen } from 'react-native-screens';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    // console.log('Email:', email);
    // console.log('Password:', password);
    navigation.navigate("Home", { Screen: "HomeDrawer", params: { email, password } })
    setEmail("")
    setPassword("")
  };

  return (
    <View style={styles.container}>
    <Image source={require("../public/images/Mobile-login-Cristina.jpg")} style={styles.headerImage} />
    
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
         { secureText ? <Image source={require('../public/icons/passwordHide-50.png' )} style={styles.icon} /> : <Image source={require('../public/icons/passwordShoweye-32.png' )} style={styles.icon} />  } 
        </TouchableOpacity>
        
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'space-evenly',
  },
  headerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  formContainer: {
    alignItems: 'center',
    // marginTop: -50,
  },
  input: {
    width: '90%',
    height: 50,
    borderBottomWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    // backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    borderBottomWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    // backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})