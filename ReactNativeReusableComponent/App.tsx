import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { CustomCheckboxGroup, CustomToastComponent, Responsive } from 'react-native-ready-use-component';
import {CustomRadioButtonGroup} from 'react-native-ready-use-component';
import responsive from 'react-native-ready-use-component';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" /> */}

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
        size={30}
        labelStyle={{ fontSize: 18, color: '#333' }}
        sizeMode="contain"
        showCheckmark={true}
      />
    </View>

    <View style={{ borderWidth: 1, }} />

    <View>
      <CustomRadioButtonGroup
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
        ]}
        selectedValue="female"
        onChange={(value) => console.log('Selected:', value)}
        type="circle"
        size={28}
        borderColor="#007bff"
        fillColor="#007bff"
        labelStyle={{ fontSize: 16, color: '#333' }}
      />
    </View>

    <View style={{ borderWidth: 1, }} />

    <View>
      <Button title="Show Toast" onPress={() => setVisible(true)} />
      <CustomToastComponent
        message="Operation completed successfully!"
        visible={visible}
        duration={3000}
        backgroundColor="#4caf50"
        textColor="#fff"
        position="top"
        showCloseButton={true}
        onClose={() => setVisible(false)}
        animationType="spring"
        progressBar={true}
      />
    </View>

    <View style={{ borderWidth: 1, }} />

    <View style={styles.container}>
      <Text style={styles.text}>
        {Responsive.isTablet() ? 'Tablet' : 'Phone'} Device
      </Text>
      <Text style={styles.text}>
        Screen Width: {Responsive.width}, Pixel Ratio: {Responsive.pixelRatio}
      </Text>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Responsive.scale(100),
    height: Responsive.verticalScale(180),
    padding: Responsive.moderateScale(10),
    borderWidth: 1,
    
  },
  text: {
    fontSize: Responsive.moderateScale(16),
  },
});

export default App;
