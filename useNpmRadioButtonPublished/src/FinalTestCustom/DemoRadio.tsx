import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomRadioButtonGroup from '../FinalCustomComponents/CustomRadioButtonGroup'; // Adjust path accordingly

const DemoRadio = () => {
  const [selected, setSelected] = useState('');

  const options = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Radio Button Demo</Text>

      <Text style={styles.subtitle}>1. Default Circle</Text>
      <CustomRadioButtonGroup
        options={options}
        onChange={setSelected}
      />

      <Text style={styles.subtitle}>2. Disc Style</Text>
      <CustomRadioButtonGroup
        options={options}
        onChange={setSelected}
        type="disc"
        fillColor="#4CAF50"
      />

      <Text style={styles.subtitle}>3. Square Style</Text>
      <CustomRadioButtonGroup
        options={options}
        onChange={setSelected}
        type="square"
        borderColor="#2196F3"
        fillColor="#2196F3"
      />

      <Text style={styles.subtitle}>4. Rectangle with Custom Size</Text>
      <CustomRadioButtonGroup
        options={options}
        onChange={setSelected}
        type="rectangle"
        size={30}
        borderColor="#FF9800"
        fillColor="#FF9800"
      />

      <Text style={styles.subtitle}>5. Large Circle with Purple Fill</Text>
      <CustomRadioButtonGroup
        options={options}
        onChange={setSelected}
        type="circle"
        size={32}
        borderColor="#9C27B0"
        fillColor="#9C27B0"
      />

      <Text style={styles.subtitle}>6. Small Square with Blue Fill</Text>
      <CustomRadioButtonGroup
        options={options}
        onChange={setSelected}
        type="square"
        size={18}
        borderColor="#3F51B5"
        fillColor="#3F51B5"
      />

      <Text style={styles.subtitle}>7. Rectangle with Custom Label Style</Text>
      <CustomRadioButtonGroup
        options={options}
        onChange={setSelected}
        type="rectangle"
        size={28}
        borderColor="#009688"
        fillColor="#009688"
        labelStyle={{ fontSize: 18, fontWeight: 'bold', color: '#009688' }}
      />
    </ScrollView>
  );
};

export default DemoRadio;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
});
