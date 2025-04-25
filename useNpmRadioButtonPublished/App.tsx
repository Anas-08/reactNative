import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DemoToast from './src/FinalTestCustom/DemoToast'
import DemoRadio from './src/FinalTestCustom/DemoRadio'
import DemoCheckBoxScreen from './src/FinalTestCustom/DemoCheckbox'
// import CaptchaDemoScreen from './src/FinalTestCustom/DemoCaptcha'
import { CustomCaptcha, CustomCheckboxGroup,CustomRadioButtonGroup,CustomToastComponent } from "react-native-ui-anas"

const App = () => {
  console.log("App loaded...")
  const [visible, setVisible] = useState(false);

  return (
      <>
        {/* <DemoToast/> */}
        {/* <DemoRadio/> */}
        {/* <DemoCheckBoxScreen/> */}

        {/* <CaptchaDemoScreen/> */}

        <CustomCheckboxGroup
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
  selectedValues={['1']}
  onChange={(values) => console.log(values)}
  color="#6200ee"
  type="rectangle"
  size={30}
  showCheckmark={false}
  sizeMode="contain"
/>

<CustomToastComponent
  message="Data saved successfully!"
  position="top"
  duration={3000}
  backgroundColor="#4caf50"
  textColor="#fff"
  showProgressBar={true}
  visible={true}
/>

<CustomRadioButtonGroup
  options={[
    { label: 'Male', value: 'm' },
    { label: 'Female', value: 'f' },
  ]}
  selectedValue="f"
  onChange={(val) => console.log(val)}
  type="circle"
  color="#007bff"
  size={24}
/>

<CustomCaptcha
  onValidate={(isValid) => alert(isValid ? 'Correct' : 'Try again')}
  operation="multiplication"
  placeholder="Your answer here"
  promptText="Solve the math problem:"
  successMessage="✔ Correct!"
  failureMessage="❌ Wrong answer!"
  autoValidate={true}
  timeout={10}
  textColor="#000"
  backgroundColor="#f1f1f1"
/>
      </>
      
  )
}

export default App

const styles = StyleSheet.create({})