import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'

//  external library for checkbox and radio btn
import { Checkbox, RadioButton } from 'react-native-paper'
// import { CheckBox } from '@rneui/themed'

const FormInsert = () => {

  const [hobbies, setHobbies] = useState([])
  const [checked, setChecked] = useState(false);

  const [value, setValue] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    cPassword: "",
    gender: "",
    hobbies: "",
    dob:"",
  })

  const [arr, setArr] = useState([])

  // handle change function
  function handleChange(text, inputFieldName){
    //   // 
    //   if(!value.firstName){
    //       console.log("first name can't be empty")
    //       setIsEnabled(false)
    //       Alert.alert("first name can't be empty")
    //       return;
          
    //     }else if(value.firstName.length < 3 ){
    //         // Alert.alert("first name must be greater than 3 ")
    //         console.log("first name must be greater than 3 ")
    //         return;
    //     }
        setValue((previousValue) => ({...previousValue, [inputFieldName]: text }))
    }

// validation function

  function validation(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /\d/;

    let err = {}
    if(!value.firstName){
        console.log("first name can't be empty")
        err.firstnameEmpty = "first name can't be empty"
        Alert.alert("first name can't be empty")
        return false;
    }else if(value.firstName.length < 3 ){
        err.firstnameMin = "minimum 3 character "
        Alert.alert("minimum 3 character")
        console.log("first name must be greater than 3 ")
        return false;
    }
    
    if(!value.middleName){
        err.middlenameEmpty = "middle name can't be empty"
        Alert.alert("middle name can't be empty")
        console.log("middle name can't be empty")
        return false;
    }else if(value.middleName.length < 3 ){
        err.middlenameMin = "midddle name must be greater than"
        Alert.alert("midddle name must be greater than")
        console.log("midddle name must be greater than 3 ")
        return false;
    }
    
    if(!value.lastName){
        err.lastnameEmpty = "last name can't be empty"
        Alert.alert("last name can't be empty")
        console.log("last name can't be empty")
        return false;
    }else if(value.lastName.length < 3 ){
        err.lastnameEmpty = "last name must be greater than 3"
        Alert.alert("last name must be greater than 3")
        console.log("last name must be greater than 3 ")
        return false;
    }
    
    if(!value.email){
        Alert.alert("email can't be empty")
        err.emailEmpty = "email can't be empty"
        console.log("email can't be empty")
        return false;
    } else if (!emailRegex.test(value.email)) {
        Alert.alert("Invalid email format");
        err.emailInvalid = "Invalid email format";
        console.log("Invalid email format");
        return false;
    }
    
    if(!value.username){
        err.usernameEmpty = "username can't be empty"
        Alert.alert("username can't be empty")
        console.log("username can't be empty")
        return false;
    }else if(value.username.length < 5 ){
        Alert.alert("username must be greater than 5")
        err.usernameMin = "username must be greater than 5"
        console.log("username must be greater than 5 ")
        return false;
    } else if (!specialCharRegex.test(value.username) || !numberRegex.test(value.username)) {
        Alert.alert("Username must contain at least one special character and one number");
        err.usernameInvalid = "Username must contain at least one special character and one number";
        console.log("Username must contain at least one special character and one number");
        return false;
    }
    
    if(!value.password){
        err.passEmpty = "password can't be empty"
        Alert.alert("password can't be empty")
        console.log("password can't be empty")
        return false;
    }else if(value.password.length < 8 ){
        Alert.alert("password must be greater than 8")
        err.passMin = "password must be greater than 8"
        console.log("password must be greater than 8")
        return false;
    }else if (!specialCharRegex.test(value.password) || !numberRegex.test(value.password)) {
        Alert.alert("Password must contain at least one special character and one number");
        err.passInvalid = "Password must contain at least one special character and one number";
        console.log("Password must contain at least one special character and one number");
        return false;
    }
    
    if(!value.cPassword){
        Alert.alert("confirm password can't be empty")
        err.cpassEmpty = "confirm password can't be empty"
        console.log("password can't be empty")
        return false;
    }else if(value.password !== value.cPassword){
        Alert.alert("confirm password is not same")
        err.cpassNotSame = "confirm password is not same"
        console.log("confirm password is not same")
        return false;
    }
    
    if(!value.gender){
        Alert.alert("gendercan't be empty")
        err.genderEmpty = "gendercan't be empty"
        console.log("gender can't be empty")
        return false;
    }

    return true;
  }

  // handle submit function
function handleSubmit(){
    //   console.log(value)

    // console.log(value)

    // if(!value.firstName){
    //     console.log("first name can't be empty")     
    // }else if(value.firstName.length < 3 ){
    //     // Alert.alert("first name must be greater than 3 ")
    //     console.log("first name must be greater than 3 ")
    // }

    // if(!value.middleName){
    //     console.log("middle name can't be empty")
    // }else if(value.middleName.length < 3 ){
    //     console.log("midddle name must be greater than 3 ")
    // }

    // if(!value.lastName){
    //     console.log("last name can't be empty")
    // }else if(value.lastName.length < 3 ){
    //     console.log("last name must be greater than 3 ")
    // }
    
    // if(!value.email){
    //     console.log("email can't be empty")
    // }

    // if(!value.username){
    //     console.log("username can't be empty")
    // }else if(value.username.length < 5 ){
    //     console.log("username must be greater than 5 ")
    // }

    // if(!value.password){
    //     console.log("password can't be empty")
    // }else if(value.password.length < 8 ){
    //     console.log("password must be greater than 8 ")
    // }

    // if(!value.cPassword){
    //     console.log("confirm password can't be empty")
    // }else if(value.password !== value.cPassword){
    //     console.log("confirm password is not same")
    // }

    // if(!value.gender){
    //     console.log("gender can't be empty")
    // }

    if(validation()){
         // Check for duplicate username
    const isDuplicateUsername = arr.some(
        (user) => user.username === value.username
      );
  
      if (isDuplicateUsername) {
        Alert.alert("Username must not be duplicate");
        console.log("Username must not be duplicate");
        return;
      }
   
    arr.push(value)
    Alert.alert("clicked on submit")
    setValue({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        cPassword: "",
        gender: "",
        hobbies: "",
        dob:"",
        aggrement: ""
    })
}

  }


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView>
    <SafeAreaView>
      <Text style={styles.heading} >Registration</Text>
      <View>
        <Text style={[styles.common]} >First Name : </Text>
        <TextInput 
        style={styles.border}
         onChangeText={any => handleChange(any, "firstName")}
         value={value.firstName}
         placeholder="enter first name"
        />
      </View>

      <View>
        <Text style={[styles.common]} >Middle Name : </Text>
        <TextInput 
        style={styles.border}
         onChangeText={text => handleChange(text, "middleName")}
         value={value.middleName}
         placeholder="enter middle name"
        />
      </View>

      <View>
        <Text style={[styles.common]} >Last Name : </Text>
        <TextInput 
        style={styles.border}
         onChangeText={text => handleChange(text, "lastName")}
         value={value.lastName}
         placeholder="enter last name"
        />
      </View>


      <View>
        <Text style={[styles.common]} >Email: </Text>
        <TextInput 
        style={styles.border}
         onChangeText={text => handleChange(text, "email")}
         value={value.email}
         placeholder="enter email"
        />
      </View>

      <View>
        <Text style={[styles.common]} >Username: </Text>
        <TextInput 
        style={styles.border}
         onChangeText={text => handleChange(text, "username")}
         value={value.username}
         placeholder="enter username"
        />
      </View>

      <View>
        <Text style={[styles.common]} >Password: </Text>
        <TextInput 
        style={styles.border}
         onChangeText={text => handleChange(text, "password")}
         value={value.password}
         placeholder="enter password"
         secureTextEntry={true}
        />
      </View>

      <View>
        <Text style={[styles.common]} >Confirm Password: </Text>
        <TextInput 
        style={styles.border}
         onChangeText={text => handleChange(text, "cPassword")}
         value={value.cPassword}
         placeholder="enter confirm password"
         secureTextEntry={true}
        />
      </View>

      <View>
        <Text style={[styles.common]} >Gender</Text>
        <View style={styles.commonFlex} >
            <RadioButton
            value="male"
            status={ checked === 'male' ? 'checked' : 'unchecked' }
            onPress={() => {
                setChecked('male')
                handleChange("male", "gender")
            }}
            />
            <Text>Male</Text>
        </View>
        
        <View style={styles.commonFlex} >
        <RadioButton
            value="female"
            status={ checked === 'female' ? 'checked' : 'unchecked' }
            onPress={() => {
                setChecked('female')
                handleChange("female", "gender")
            }}
            />
            <Text>Female</Text>
        </View>

        <View style={styles.commonFlex} >
        <RadioButton
            value="others"
            status={ checked === 'others' ? 'checked' : 'unchecked' }
            onPress={() => {
                setChecked('others')
                handleChange("others", "gender")
            }}
            />
            <Text>Others</Text>
        </View>
    </View>

      <View>
        <Text style={[styles.common]} >Hobbies</Text>
        <View  style={styles.commonFlex} >
            <Checkbox
            value="Playing"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                setChecked(!checked);
                }}
            />
            <Text>Playing</Text>
        </View>

        <View  style={styles.commonFlex} >
            <Checkbox
            value="Swimming"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                setChecked(!checked);
                }}
            />
            <Text>Swimming</Text>
        </View>

        <View  style={styles.commonFlex} >
            <Checkbox
            value="Reading"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                setChecked(!checked);
                }}
            />
            <Text>Reading</Text>
        </View>

        <View  style={styles.commonFlex} >
            <Checkbox
            value="Riding"
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                setChecked(!checked);
                }}
            />
            <Text>Riding</Text>
        </View>

      </View>

      {/* <TouchableOpacity
        onPress={handleSubmit}
      >
        <Text>Submit</Text>
      </TouchableOpacity> */}

    <View style={{ display: "flex", flexDirection:"row",  alignItems: "center", justifyContent: "space-around" }} >
         <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
        />
        <Text>I agree to terms & conditions </Text>    
    </View>

        {
            isEnabled ? 
            <Button
                title='Submit Form'
                onPress={handleSubmit}
            />
          : null
        }

        <View>
            {
                arr.length > 0 && isEnabled ?
                <View>
                    {
                        arr.map((user, index)=>
                        <View style={[styles.border]} >
                            <Text>firstname: {user.firstName}</Text>
                            <Text>middleName: {user.middleName}</Text>
                            <Text>lastName: {user.lastName}</Text>
                            <Text>email: {user.email}</Text>
                            <Text>username: {user.username}</Text>
                            <Text>password: {user.password}</Text>
                            <Text>gender: {user.gender}</Text>
                        </View>)
                    }
                </View>
                : null
            }
        </View>

    </SafeAreaView>
    </ScrollView>
  )
}

export default FormInsert

const styles = StyleSheet.create({
    common: {
        fontSize: 14,
        paddingLeft:16
    },
    heading: {
        fontSize: 22,
        textAlign: "center",
    },
    border: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 6,
        margin: 12,
        padding: 12
    },
    commonFlex:{
       display: "flex",
       flexDirection:"row",
       alignItems: "center",
       justifyContent: "flex-start" 
    }
})


