import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-anas';
import CustomRadioExample from './CustomRadioExample ';
import GenderSelection from './src/GenderSelection';
import SurveyForm from './src/SurveyForm ';
import UserForm from './src/SimpleForm';
import UserFormTest from './src/UserForm';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
console.log("App load")
  return (
    <>
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.title}>Select an Option:</Text>
      
      <RadioGroup
        options={options}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
        radioProps={{
          color: '#007AFF', // Custom color
          size: 24,        // Custom size
        }}
      />

      <Text style={styles.selectedText}>
        Selected: {selectedOption}
      </Text>
    </View>

    <CustomRadioExample/>

    <GenderSelection />
    <SurveyForm />
    <UserForm />

      </ScrollView>

      {/* <UserFormTest /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;