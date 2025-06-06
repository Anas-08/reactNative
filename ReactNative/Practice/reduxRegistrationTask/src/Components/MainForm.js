import { Alert, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomInputTextbox from './CustomInputTextbox'

import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser, displayData, editUser, submitData } from '../Redux/Reducers/registrationReducer'
import Radio from './Radio'
import Checkbox from './Checkbox'
import DisplayFlat from './DisplayFlatList'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import DatePickerInput from './DatePickerInput'

const MainForm = () => {

    const dispatch = useDispatch()
    const userData = useSelector((state) => state.registration.userDataArray)
    // console.log("intial slector -> ", selector)

    // all common value to get from the user
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
        dob: "",
    })

    // for gender selection
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

    // for hobby selection
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

    // const [editId, setEditId] = useState()
    const [id, setId] = useState(null)
    const [isSet, setIsSet] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false)

    // handling date
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
        if (date > today) {
            Alert.alert("Date", "can't greater than today")
            hideDatePicker()
            return;
        }
        setSelectedDate(date.toDateString());
        handleChange(date.toDateString(), "dob")
        hideDatePicker();
    };
    
    // handling date end

    // for handling the user input
    const handleChange = (text, inputFieldName) => {
        console.log(text, inputFieldName)
        setValue((previousValue) => ({ ...previousValue, [inputFieldName]: text }))
    }

    function handleSubmit() {
        if(!isSet){
            insertUser()
        }else{
            handleUpdateSubmit()
            // setId(null)
        }
    }

    function insertUser(){
         // const selectGender = gender.find((selGender) => selGender.isChecked)?.value
         const selectGender = gender.find((selGender) => selGender.isChecked)?.value
         const selectHobbies = hobby.filter((selHobby) => selHobby.isChecked).map((selHobby) => (selHobby.value))
         const newObject = {
             ...value,
             gender: selectGender,
             hobbies: selectHobbies
         }
 
         dispatch(addUser(newObject))
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
             dob: "",
         })
         setGender(gender.map((value) => ({ ...value, isChecked: false })))
         setHobby(hobby.map((value) => ({ ...value, isChecked: false })))
         setIsEnabled(!isEnabled)
         setSelectedDate("")
        //  console.log("selector value --> ", selector)
    }

       // handle delete
       function handleDelete(userIndex) {
        // console.log(userIndex)
        Alert.alert('Delete', 'Are you sure you want to delete ? ', [
            {
                text: 'Cancel',
            },
            {
                text: 'OK',
                onPress: () => {
                    dispatch(deleteUser(userIndex))
                }
            },
        ])
       }

    // handle Edit, when user click the data will fill in the inputbox
    function handleEdit(data, index) {
      //  console.log("edit data ---------------> ", data)
      //  console.log("edit id ---------------> ", index)
        // console.log(index)

        const gen = gender.map((item) => (
            {
                ...item,
                isChecked: item.value == data.gender
            }
        ))
        // console.log(gen)

        const hobb = hobby.map((item) => (
            {
                ...item,
                isChecked: item.value == data.hobbies.filter(value => value == item.value)
                // isChecked: data.hobbies.includes(item.value),
            }
        ))

        // console.log(hobb)
        // setSelectedDate(data.dob)
        
        setHobby(hobb)
        setGender(gen)

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
            dob: data.dob,
        })
        // setIsSet(true)
       // console.log("before set edit index(id) -----------------> ", index)
        setId(index)
        setIsSet(true) // 
        setSelectedDate(data.dob)
       // console.log("after set edit index(id) -----------------> ", index)
    }

    // handle update submit
    function handleUpdateSubmit() {
        const selectGender = gender.find((selGender) => selGender.isChecked)?.value
        const selectHobbies = hobby.filter((selHobby) => selHobby.isChecked).map((selHobby) => (selHobby.value))

        // if (selectGender == "") {
        //     Alert.alert("gender is not selected")
        //     // console.log("gender can't be empty")
        //     return false;
        // }
        // if (selectHobbies.length == 0) {
        //     Alert.alert("hobbies is not selected")
        //     // console.log("gender can't be empty")
        //     return false;
        // }

        const obj = {
            ...value,
            gender: selectGender,
            hobbies: selectHobbies
        }

        // const filterData = validation()
        // if (filterData) {
            // if (!isSet) {
            //     const userAlreadyExist = arr.some(user => user.username === value.username)
            //     if (userAlreadyExist) {
            //         Alert.alert("username already exist")
            //         // console.log("gender can't be empty")
            //         return;
            //     }
            // } else {
            //     const usercount = arr.filter(user => user.username === value.username)
            //     if (usercount.length == 2) {
            //         Alert.alert("username already exist")
            //         // console.log("gender can't be empty")
            //         return;
            //     }
            // }

            // console.log(obj)
            // console.log(id)
            // arr[editId] = obj
            dispatch(editUser(obj, id))

            // setArr([...arr, obj])
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
                dob: "",
            })
            setGender(gender.map((value) => ({ ...value, isChecked: false })))
            setHobby(hobby.map((value) => ({ ...value, isChecked: false })))
            setSelectedDate("")

            setIsSet(!isSet)

       // } // end of validarion
    }
  
    // handle radio button change
    const handleRadioChange = (ind) => {
        const updatedRadio =
            gender.map((value, index) => ({
                ...value,
                isChecked: index === ind,
            }));
        // const updatedRadio = gender.map(item => Object.fromEntries(Object.entries(item).filter(([key, value]) => value === true)));
        // will use in update
        setGender(updatedRadio);
        // console.log(ind);
    };

    // const handleRadioChange = (ind) => {
    //     const updatedRadio = gender.reduce((acc, item, index) => {
    //       acc.push({
    //         ...item,
    //         isChecked: index === ind,
    //       });
    //       return acc;
    //     }, []);
      
    //     setGender(updatedRadio);
    //     // console.log(ind);
    //   };

    // const handleRadioChange = (ind) => {
    //     const updatedRadio = [...gender]; // Create a shallow copy of the gender array
      
    //     for (let i = 0; i < updatedRadio.length; i++) {
    //       if (i === ind) {
    //         updatedRadio[i].isChecked = true;
    //       } else {
    //         updatedRadio[i].isChecked = false;
    //       }
    //     }
      
    //     setGender(updatedRadio);
    //     // console.log(ind);
    //   };

    // handle checkbox change
    const handleCheckBoxChange = (ind) => {
        const updatedCheck = hobby.map((value, index) => ({
            ...value,
            isChecked: index === ind ? !value.isChecked : value.isChecked
        }));
        setHobby(updatedCheck);
        // console.log(ind);
    };

    return (
      <ScrollView>
        {/* <SafeAreaView> */}

        <Text style={styles.heading}>Registration Redux </Text>
        <View>
          <CustomInputTextbox
            style={styles.border}
            handleChange={handleChange}
            value={value.firstName}
            placeholder="enter first name"
            name="firstName"
          />
        </View>

        <View>
          <CustomInputTextbox
            style={styles.border}
            handleChange={handleChange}
            value={value.middleName}
            placeholder="enter middle name"
            name="middleName"
          />
        </View>

        <View>
          <CustomInputTextbox
            style={styles.border}
            handleChange={handleChange}
            value={value.lastName}
            placeholder="enter last name"
            name="lastName"
          />
        </View>

        <View>
          <CustomInputTextbox
            style={styles.border}
            handleChange={handleChange}
            value={value.email}
            placeholder="enter email name"
            name="email"
          />
        </View>

        <View>
          <CustomInputTextbox
            style={styles.border}
            handleChange={handleChange}
            value={value.username}
            placeholder="enter username"
            name="username"
          />
        </View>

        <View>
          <CustomInputTextbox
            style={styles.border}
            handleChange={handleChange}
            value={value.password}
            placeholder="enter password"
            name="password"
            secure="true"
          />
        </View>

        <View>
          <CustomInputTextbox
            style={styles.border}
            handleChange={handleChange}
            value={value.cPassword}
            placeholder="enter cPassword"
            name="cPassword"
            secure="true"
          />
        </View>

        <View style={[styles.commonFlex,styles.border, { justifyContent: "space-between" }]} >
          <View><Text>{selectedDate}</Text></View>
            <Pressable onPress={showDatePicker}>
              <Image
                source={require('../public/images/datepicker_icon_32x32.png')}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date" // 'date', 'time', or 'datetime'
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              
            </Pressable>
          </View>
     

        {/* 
      <View>
        <DatePickerInput
          handleChange={handleChange}
          value={value.dob}
        />
      </View> */}

        <View>
          <Text style={[styles.common]}>Select Gender: </Text>
          <Radio data={gender} handleChange={handleRadioChange} />
        </View>

        <View>
          <Text style={[styles.common]}>Select Hobbies: </Text>
          <Checkbox data={hobby} handleChange={handleCheckBoxChange} />
        </View>

        <View>
          <TouchableOpacity
            style={[
              styles.border,
              {alignItems: 'center', backgroundColor: 'lightgrey'},
            ]}
            // onPress={!isSet ? handleSubmit : handleUpdateSubmit}
            onPress={handleSubmit}>
            {!isSet ? <Text>Submit</Text> : <Text>Edit</Text>}
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Switch
            value={isEnabled}
            onValueChange={() => setIsEnabled(!isEnabled)}
          />
          <Text>I agree to terms & conditions </Text>
        </View>

        <View>
          <DisplayFlat
            data={userData}
            style={[styles.border]}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          {/* <DisplayData data={userData} style={styles.border} handleEdit={handleEdit} handleDelete={handleDelete} /> */}
          {/* <DisplayData data={selector} style={styles.border} handleEdit={handleEditDispatch} handleDelete={handleDelete} /> */}
        </View>

        {/* </SafeAreaView> */}
      </ScrollView>
    );
}

export default MainForm

const styles = StyleSheet.create({
    center: {
        textAlign: "center"
    },
    common: {
        fontSize: 14,
        paddingLeft: 16
    },
    heading: {
        fontSize: 22,
        textAlign: "center",
    },
    border: {
        borderStyle: "solid",
        borderColor: "black",
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 6,
        margin: 12,
        padding: 12
    },
    button: {
      borderStyle: "solid",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 6,
      margin: 12,
      padding: 12
  },
    commonFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    radioBtn: {
        height: 18,
        width: 18,
        borderRadius: "100%",
        borderWidth: 1,
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
        borderWidth: 1,
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