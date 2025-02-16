import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // console.log(username)
  // console.log(password)

  function handlePress(){
      // Alert.alert(username);
      // navigation.navigate("ParentHome", { username:"username", password: "password" }) //  parameter will only asseciable to the parentHome
      // navigation.navigate("ParentHome", { screens: "Home", params: { username:"username", password: "password" }}) // invalid name name screens 
      // navigation.navigate("Home",  { username:username, password: password } ) // can't go directly to nested screen 
      // navigation.navigate("ParentHome", { screen: "Home", params: { username:username, password: password } }  )
      navigation.navigate("Home",  { username:username, password: password }  )
      setUsername('');
      setPassword('');
  }
  return (
    <View>
      <Text>Login</Text>

      <View style={{ display:"flex", alignItems:"center", justifyContent: "center",paddingBlock: 12, gap: 12 }} >
                    <Pressable style={[ {display:"flex", alignItems:"center", justifyContent: "center", padding: 12, width:"80%", borderRadius: 6, backgroundColor: "lightblue" }]} 
                        onPress={handlePress} >
                        <Text style={[ { color: "black", textAlign: "center" }]} >Login</Text>
                    </Pressable>
                </View>
    </View>
  )
}

export default Login