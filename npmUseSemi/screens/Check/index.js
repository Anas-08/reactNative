import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CustomCheckboxGroup } from 'react-native-ready-use-component';
// import {
//     CustomCheckboxGroup,
//     CustomCheckBoxGroup,
//     CustomToastComponent,
//   } from 'react-native-ui-anas';

const CheckTest = ({ navigation }) => {
    const [selectedValues, setSelectedValues] = useState(['apple']);
  return (

    <View style={styles.container}>
    <Text style={styles.title}>Custom Checkbox Group</Text>
    {/* <CustomCheckboxGroup
      options={[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Orange', value: 'orange' },
      ]}
      selectedValues={selectedValues}
      onChange={(values) => setSelectedValues(values)}
      type="square"
      color="#6200ee"
      size={30}
      labelStyle={{ fontSize: 18, color: '#333' }}
      sizeMode="contain"
      showCheckmark={true}
    />
    <Text style={styles.selected}>Selected: {selectedValues.join(', ')}</Text>
    {/* <Button title="Next: Radio Button" onPress={() => navigation.navigate('RadioButton')} /> */}

    <View style={{ height: "1", backgroundColor: "black", marginVertical: 12 }} />

    <View>
      <CustomCheckboxGroup
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
        ]}
        selectedValues={['apple']}
        onChange={(selected) => console.log('Selected:', selected)}
        type="square"
        color="#6200ee"
        size={25}
        // labelStyle={{ fontSize: 18, color: '#333' }}
        sizeMode="contain"
        showCheckmark={true}
      />
    </View> 


    <View style={{ height: "1", backgroundColor: "black", marginVertical: 12 }} />
    <View>
    <CustomCheckboxGroup
        // options={[{ label: 'I agree to the terms & conditions', value: 'agree' }]}
        options={[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Orange', value: 'orange' },
      ]}
        selectedValues={['apple']}
        // onChange={(values) => setAgree(values)}
        onChange={(values) => setSelectedValues(values)}
        color="#6200ee"
        type="square"
        size={25}
        showCheckmark={true}
              // sizeMode="center"
              sizeMode="center"
      />
    </View>

  </View>
  )
}

export default CheckTest

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    selected: { marginTop: 20, fontSize: 16, color: '#444' },
})