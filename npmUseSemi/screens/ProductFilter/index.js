
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomRadioButtonGroup, CustomToastComponent } from 'react-native-ready-use-component';

const ProductFilterScreen = () => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [toastVisible, setToastVisible] = useState(false);
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Product Size</Text>
      <CustomRadioButtonGroup
        options={[
          { label: 'Small', value: 'small' },
          { label: 'Medium', value: 'medium' },
          { label: 'Large', value: 'large' },
        ]}
        selectedValue={selectedSize}
        onChange={(value) => {
          setSelectedSize(value);
        //   setToastVisible(true);
        }}
        type="circle"
        size={20} 
        borderColor="#4CAF50"
        fillColor="#4CAF50"
        labelStyle={styles.radioLabel}
      />
      <Button title="Apply Filter" onPress={() => setToastVisible(true)} />
      {/* <Button title="Next" onPress={() =>  navigation.navigate('')} /> */}

      <TouchableOpacity 
        onPress={() =>  navigation.navigate('ProfileSettingsScreen')}
        style={{
            borderWidth: 1, 
            paddingVertical: 12,
            marginBlock: 20,
            
        }}
      >
        <Text
            style={{
                textAlign: "center",
                fontWeight: "bold"
            }}
        >Next Screen</Text>
      </TouchableOpacity>

      <CustomToastComponent
        message={`Selected size: ${selectedSize}`}
        visible={toastVisible}
        duration={2000}
        backgroundColor="#4CAF50"
        textColor="#fff"
        position="bottom"
        showCloseButton={false}
        onClose={() => setToastVisible(false)}
        animationType="spring"
        progressBar={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, 
    justifyContent: 'center',
  },
  title: {
    fontSize: 18, 
    marginBottom: 10, 
  },
  radioLabel: {
    fontSize: 16, 
  },
});

export default ProductFilterScreen;
