import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CustomCheckboxGroup, CustomRadioButtonGroup } from 'react-native-ready-use-component';

const RadioTest = () => {
    const [selected, setSelected] = useState('female');

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Custom Radio Button Group</Text>
    <CustomRadioButtonGroup
      options={[
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ]}
      selectedValue={selected}
      onChange={(val) => setSelected(val)}
      type="circle"
      size={20}
      borderColor="#007bff"
      fillColor="#007bff"
      labelStyle={{ fontSize: 16, color: '#333' }}
    />
    <Text style={styles.selected}>Selected: {selected}</Text>
    {/* <Button title="Next: Toast" onPress={() => navigation.navigate('Toast')} /> */}
  </View>
  )
}

export default RadioTest

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        padding: 20,
    },
    title: { 
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    selected: { 
        marginTop: 20,
        fontSize: 16,
        color: '#444'
    },
})