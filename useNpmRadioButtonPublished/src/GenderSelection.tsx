import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-anas';

const GenderSelection = () => {
  const [gender, setGender] = useState<string | null>(null);

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const handleSubmit = () => {
    if (!gender) {
      Alert.alert('Error', 'Please select your gender');
      return;
    }
    Alert.alert('Success', `Selected gender: ${gender}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Gender:</Text>
      
      <RadioGroup
        options={genderOptions}
        selectedOption={gender}
        onSelect={setGender}
        radioProps={{
          color: '#FF6B6B',
          size: 22,
        }}
      />

      <Text style={styles.selectedText}>
        {gender ? `You selected: ${gender}` : 'Make a selection'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F7FFF7',
    borderRadius: 10,
    margin: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#292F36',
  },
  selectedText: {
    marginTop: 15,
    color: '#4ECDC4',
    fontWeight: '500',
  },
});

export default GenderSelection;