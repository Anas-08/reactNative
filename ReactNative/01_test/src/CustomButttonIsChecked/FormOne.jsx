import { Alert, Button, Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'

// import
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CheckBoxChecked from './CheckBoxChecked'
import RadioChecked from './RadioChecked'

const FormOne = () => {
    const [value, setValue] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        cPassword: "",
        gender: "",
        hobbies: [],
        dob:"",
      })
    
      const [arr, setArr] = useState([])
      const [isSet, setIsSet] = useState(false)
      // handle change function
        const handleChange = (text, inputFieldName) => {
            setValue((previousValue) => ({...previousValue, [inputFieldName]: text }))
        }
    
        // handle email validation
        const validateEmail = ()=>{
            const emailRegexValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegexValid.test(value.email)
        }
    
        const validatePassword = () =>{
            const passwordRegexValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            return passwordRegexValid.test(value.password)
        }
    
        const validateUsername = () =>{
            const usernameRegexValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
            return usernameRegexValid.test(value.username)
        }
    
        // handle password validation
    
    // validation function
      const validation = () => {
    
        const emailRegexValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if(!value.firstName){
            Alert.alert("first name can't be empty")
            return false;
        }else if(value.firstName.length < 3 ){
            Alert.alert("first name must be greater than 3 characters")
            // console.log("first name must be greater than 3 ")
            return false;
        }
        
        if(!value.middleName){
            Alert.alert("middle name can't be empty")
            // console.log("middle name can't be empty")
            return false;
        }else if(value.middleName.length < 3 ){
            Alert.alert("middle name must be greater than 3 characters")
            // console.log("midddle name must be greater than 3 ")
            return false;
        }
        
        if(!value.lastName){
            Alert.alert("last name can't be empty")
            // console.log("last name can't be empty")
            return false;
        }else if(value.lastName.length < 3 ){
            Alert.alert("last name must be greater than 3 characters")
            // console.log("last name must be greater than 3 ")
            return false;
        }
        
        if(!value.email){
            Alert.alert("email can't be empty")
            // console.log("email can't be empty")
            return false;
        }
        if(!validateEmail()){
            // console.log("enter proper email")
            Alert.alert("enter valid email")
            return false;
        }
        // else if(emailRegexValid.test(value.email)){
        //     // console.log("enter proper email")
        //     Alert.alert("enter proper email")
        //     return false;
        // }
        
        if(!value.username){
            Alert.alert("username can't be empty")
            // console.log("username can't be empty")
            return false;
        }else if(value.username.length < 5 ){
            Alert.alert("username must be greater than 5 characters")
            // console.log("username must be greater than 5 ")
            return false;
        } 
        if(!validateUsername()){
            // console.log("enter proper email")
            Alert.alert("at least have one digit and one special character")
            return false;
        }
        
        if(!value.password){
            Alert.alert("password can't be empty")
            // console.log("password can't be empty")
            return false;
        }else if(value.password.length < 8 ){
            Alert.alert("password must be greater than 8 characters")
            // console.log("password must be greater than 8")
            return false;
        }
        if(!validatePassword()){
            // console.log("enter proper email")
            Alert.alert("at least have one digit and one special character")
            return false;
        }
        
        if(!value.cPassword){
            Alert.alert("confirm password can't be empty")
            // console.log("password can't be empty")
            return false;
        }else if(value.password !== value.cPassword){
            Alert.alert("confirm password is not same")
            // console.log("confirm password is not same")
            return false;
        }
        
        if(!value.dob){
            Alert.alert("date is not selected")
            // console.log("gender can't be empty")
            return false;
        }
    
        return true;
      }
    
      // handle submit function
        function handleSubmit(){
            //   console.log(value)
            // console.log(validation())
            const selectGender = gender.find((selGender) => selGender.isChecked)?.value
            const selectHobbies = hobby.filter((selHobby) => selHobby.isChecked).map((selHobby)=> ( selHobby.value))
    
            const obj = {
                ...value,
                gender: selectGender,
                hobbies: selectHobbies
            }
    
           // const filterData = validation()
            // if(filterData){   
              
            //     const userAlreadyExist = arr.some(user => user.username === value.username)
            //     if(userAlreadyExist){
            //         Alert.alert("username already exist")
            //             // console.log("gender can't be empty")
            //         return;
            //     }
            //         // arr.push(value)
                        if(!isSet){
                            setArr([...arr, obj])
                        console.log(arr)
                        Alert.alert("user data added")
                        setValue({
                            firstName: "",
                            middleName: "",
                            lastName: "",
                            email: "",
                            username: "",
                            password: "",
                            cPassword: "",
                            gender: "",
                            hobbies: [],
                            dob:"",
                        })
                        // selectGender.map((value) => ({ ...value, isChecked:false }))
                        // selectHobbies.map((value) => ({ ...value, isChecked:false }))
                        setGender(gender.map((value) => ({ ...value, isChecked:false })))
                        setHobby(hobby.map((value) => ({ ...value, isChecked:false })))
                        setSelectedDate(null)
    
                        }else{
                            handleUpdateSubmit()
                        }
                //    }
            }
                
    
      const [isEnabled, setIsEnabled] = useState(false);
    //   const toggleSwitch = () => setIsEnabled(!isEnabled);
    
    //    const [selectGender, setSelectGender] = useState(null)
        const [option, setOption] = useState(null)
    
    
      const [gender, setGender] = useState([
        {
            id: 1,
            value: "male",
            isChecked: false
        },
        {
            id: 2,
            value: "female",
            isChecked: false
        },
        {
            id: 3,
            value: "others",
            isChecked: false
        },
    ])
    
    
        const [hobby, setHobby] = useState([
            {
                id: 1,
                value: "music",
                isChecked: false
            },
            {
                id: 2,
                value: "dancing",
                isChecked: false
            },
            {
                id: 3,
                value: "reading",
                isChecked: false
            },
            {
                id: 4,
                value: "riding",
                isChecked: false
            },
            {
                id: 5,
                value: "playing",
                isChecked: false
            },
        ])
    
        // const handleRadioChange = (selectedIndex) => {
        //     setGender(prevData => {
        //         let temp = prevData
        //         temp?.map((option, index) => option.isChecked = selectedIndex == index)
        //         return temp
        //     });
        //     // setRender({})
        // };
     
        const handleRadioChange = (ind) => {
            // const updatedRadio =
            // gender.map((value, index) => ({ isChecked: index === ind }));
            const updatedRadio =
            gender.map((value, index) => ({
                    ...value,    
                    isChecked: index === ind,
                }));
                console.log();
                console.log(ind, updatedRadio)
                setGender(updatedRadio);
        };
        
        
        const handleCheckBoxChange = (ind) => {
            const updatedCheck = hobby.map((value, index) => ({
                ...value,
                isChecked: index === ind ? !value.isChecked : value.isChecked
            }));
            console.log(updatedCheck, ind);
            setHobby(updatedCheck);
        };
    
    
      const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
      const [selectedDate, setSelectedDate] = useState('');
    
     
      const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
     
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
     
      const handleConfirm = (date) => {
        const today = new Date()
        if(date > today){
            Alert.alert("Date", "can't greater than today")
            hideDatePicker()
            return;
        }
            setSelectedDate(date.toDateString());
            handleChange(date.toDateString(), "dob")
            hideDatePicker();
      };
    
    
      // handle delete
    
      function handleDelete(indexAr){
        console.log(indexAr)
     
        // const deleteItem = arr.filter(data => data)
        // const del = cust()
        // console.log(del)
    
        Alert.alert('Delete', 'Are you sure you want to delete ? ', [
            {
              text: 'Cancel',
            },
            {
                text: 'OK',
                 onPress: () => { 
                    // const deleteItem = arr.filter((_, index) => index != indexAr)
                    // const deleteItem = arr.slice(indexAr,1)
                    // const deleteItem = arr.splice(indexAr, 1)
                    const deleteItem = [...arr]
                    deleteItem.splice(indexAr, 1)
                    setArr(deleteItem)
  
            }}, 
          ])
    
        // if(deleteItem){
        //     const deleteItem = arr.filter((_, index) => index != indexAr)
        //     setArr(deleteItem)
        // }
        // const deleteItem = arr.filter((data, index) => index != indexAr)
      }
    
      const [updateId, setUpdateId] = useState()
      function handleUpdate(data, index){
        console.log(data)
        console.log(index)
    
        // =====
    
        // const gen = gender.map((item) => ({
        //     ...item,
        //     isChecked: item.value === data.gender, // Ensure only one is checked
        // }));
        // const gen = gender.filter((item) => data.gender === item.value ).map((item)=>({...item, isChecked: true}))
        const gen = gender.filter((item) => data.gender === item.value ).map((item)=>{
            (item.isChecked= true)
        })
        console.log(gen)
        
        const hobb = hobby.filter((item) => data.hobbies.includes(item.value)  ).map((item)=>{
            (item.isChecked= true)
        })
        console.log(hobb)
    
        setSelectedDate(data.dob)
        setUpdateId(index)
        setValue({
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            email: data.email,
            username: data.username,
            password: data.password,
            cPassword: data.cPassword,
            gender: data.gender,
            hobbies: [],
            dob:data.dob,
        })
        setIsSet(true)
    
      }
    
      // handle update submit
      function handleUpdateSubmit(){
        const selectGender = gender.find((selGender) => selGender.isChecked)?.value
        const selectHobbies = hobby.filter((selHobby) => selHobby.isChecked).map((selHobby)=> ( selHobby.value))
    
        const obj = {
            ...value,
            gender: selectGender,
            hobbies: selectHobbies
        }
    
    
        // const filterData = validation()
        // if(filterData){   
        //     if(!isSet){
        //         const userAlreadyExist = arr.some(user => user.username === value.username)
        //         if(userAlreadyExist){
        //             Alert.alert("username already exist")
        //                 // console.log("gender can't be empty")
        //             return;
        //         }
        //     }else{
        //         const usercount = arr.filter(user => user.username === value.username)
        //         if(usercount.length ==2){
        //             Alert.alert("username already exist")
        //                 // console.log("gender can't be empty")
        //             return;
        //         }
        //     }
           
            arr[updateId] = obj
            Alert.alert("user data edited")   
            setValue({
                firstName: "",
                middleName: "",
                lastName: "",
                email: "",
                username: "",
                password: "",
                cPassword: "",
                gender: "",
                hobbies: [],
                dob:"",
            })
            setGender(gender.map((value) => ({ ...value, isChecked:false })))
            setHobby(hobby.map((value) => ({ ...value, isChecked:false })))
            setSelectedDate(null)
            setIsSet(!isSet)
    // } // submit end
      } // handleUpdateSubmit end

  return (
    <ScrollView style={{ marginBlockEnd: 40 }} >
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
        <Text style={[styles.common]} >Select Gender: </Text>

        <RadioChecked data={gender} handleChange={handleRadioChange}  />
      </View>

      <View>
        <Text style={[styles.common]} >Select Hobbies: </Text>

        <CheckBoxChecked data={hobby} handleChange={handleCheckBoxChange}  />
      </View>


      <View style={{ padding: 20 }}>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date" // 'date', 'time', or 'datetime'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {/* <Text style={{ marginTop: 20 }}> {selectedDate === true ? "Selected Date : " :  null }</Text> */}
      <Text style={{ marginTop: 20 }}>Selected Date: {selectedDate || 'None'}</Text>
    </View>

  

    <View style={{ display: "flex", flexDirection:"row",  alignItems: "center", justifyContent: "space-around" }} >
         <Switch
          value={isEnabled}
          onValueChange={()=> setIsEnabled(!isEnabled)}
        />
        <Text>I agree to terms & conditions </Text>    
    </View>

        {
        //     isEnabled ? 
        //     <Button
        //         title='Submit Form'
        //         onPress={handleSubmit}
        //     />
        //   : null

        isEnabled ? 
            <TouchableOpacity
            style={[styles.border,{alignItems: "center", backgroundColor: "lightgrey"}]}
                onPress={!isSet ? handleSubmit : handleUpdateSubmit}
            >
                 { !isSet ? <Text>Submit</Text> : <Text>Edit</Text> }
            </TouchableOpacity>
            : null
        }

        <View>
            {
                arr.length > 0 && isEnabled ?
                <View>
                    {
                        arr.map((user, index)=>
                        <View key={index} style={[styles.border, {display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}]} >
                       
                            <View>
                                <Text>Id : {index}</Text>
                                <Text>firstname: {user.firstName}</Text>
                                <Text>middleName: {user.middleName}</Text>
                                <Text>lastName: {user.lastName}</Text>
                                <Text>email: {user.email}</Text>
                                <Text>username: {user.username}</Text>
                                <Text>password: {user.password}</Text>
                                <Text>gender: {user.gender}</Text>
                                <Text>hobbies: {user.hobbies.join(", ")}</Text>
                                <Text>date: {user.dob}</Text>
                            </View>
                            <View>
                                <Pressable  style={[styles.border, { backgroundColor: "tomato" }]} onPress={()=> handleDelete(index)}>
                                    <Text>Delete</Text>
                                </Pressable>
                                <Pressable  style={[styles.border , { backgroundColor: "skyblue" }]} onPress={()=> handleUpdate(user, index)}>
                                    <Text>Update</Text>
                                </Pressable>
                            </View>
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

export default FormOne


const styles = StyleSheet.create({
    center: {
        textAlign: "center"
    },
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
    },
    radioBtn: {
        height: 18,
        width: 18,
        borderRadius: "100%",
        borderWidth:1,
        borderColor: "black",
        padding: 2
    },
    radioSelected: {
        height: 12,
        width: 12,
        borderRadius: 100,
        backgroundColor: "black",
        borderRadius: "100%",
    },
    radioUnSelected: {
        height: 12,
        width: 12,
        borderRadius: 100,
        backgroundColor: "white",
        borderRadius: "100%",
    },
    checkbox: {
        height: 18,
        width: 18,
        // borderRadius: 30,
        borderWidth:1,
        borderColor: "black",
        padding: 2
    },
    checkboxSelected: {
        height: 12,
        width: 12,
        // borderRadius: 100,
        backgroundColor: "blue",

    },
    checkboxUnSelected: {
        height: 12,
        width: 12,
        // borderRadius: 100,
        backgroundColor: "white",

    },
})
