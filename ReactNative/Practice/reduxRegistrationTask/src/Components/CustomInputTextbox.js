import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomInputTextbox = ({style, value, placeholder, handleChange, name, secure}) => {
  return (
   <TextInput
        style={style}
        onChangeText={text => handleChange(text, name)}
        value={value}
        placeholder={placeholder}
        secureTextEntry={ secure === "true" ? true : false }
    />
  )
}

export default CustomInputTextbox

const styles = StyleSheet.create({})