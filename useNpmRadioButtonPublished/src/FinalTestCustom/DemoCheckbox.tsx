import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import CustomCheckBoxGroup from '../FinalCustomComponents/CustomCheckboxGroup';

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];

const DemoCheckBoxScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CustomCheckBoxGroup Examples</Text>

      
<CustomCheckBoxGroup
  options={[{ label: 'Item A', value: 'a' }, { label: 'Item B', value: 'b' }]}
  size={40}
  sizeMode="center"
  color="#4CAF50"
/>
{/* 
<CustomCheckBoxGroup
  options={[{ label: 'Full Width', value: 'full' }]}
  sizeMode="cover"
  type="rectangle"
  color="#3F51B5"
/> */}

<CustomCheckBoxGroup
  options={[{ label: 'Contain Box', value: 'contain' }]}
  size={30}
  sizeMode="center"
  color="#FF9800"
/>


// ✅ Fill color only (no checkmark)
<CustomCheckBoxGroup
  options={[{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }]}
  color="#4CAF50"
  showCheckmark={false}
/>

// ✅ Fill color with checkmark (default)
<CustomCheckBoxGroup
  options={[{ label: 'Item 1', value: '1' }, { label: 'Item 2', value: '2' }]}
  color="#2196F3"
  showCheckmark={true}
/>


      <Text style={styles.subtitle}>1. Default Checkboxes</Text>
      <CustomCheckBoxGroup options={options} />

      <Text style={styles.subtitle}>2. Square Checkboxes - Blue Color</Text>
      <CustomCheckBoxGroup options={options} color="#2196F3" type="square" />

      <Text style={styles.subtitle}>3. Rectangle Checkboxes - Green Color</Text>
      <CustomCheckBoxGroup options={options} type="rectangle" color="#4CAF50" />

      <Text style={styles.subtitle}>4. Large Size Checkboxes</Text>
      <CustomCheckBoxGroup options={options} size={40} color="#FF5722" />

      <Text style={styles.subtitle}>5. Small Checkboxes with Bold Label</Text>
      <CustomCheckBoxGroup
        options={options}
        size={16}
        labelStyle={{ fontWeight: 'bold', fontSize: 14 }}
        color="#9C27B0"
      />

      <Text style={styles.subtitle}>6. Pre-selected Values</Text>
      <CustomCheckBoxGroup options={options} selectedValues={['vue']} color="#3F51B5" />

      <Text style={styles.subtitle}>7. Custom Label Style and Border</Text>
      <CustomCheckBoxGroup
        options={options}
        labelStyle={{ color: '#FF5722', fontSize: 18 }}
        color="#FFC107"
        type="rectangle"
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#F5F5F5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subtitle: { fontSize: 18, marginVertical: 10, color: '#333' },
});

export default DemoCheckBoxScreen;
