import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CustomCheckboxGroup} from 'react-native-ready-use-component';

const ProfileSettingsScreen = () => {
  const [selectedOptions, setSelectedOptions] = useState(['email']);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Preferences</Text>
      <CustomCheckboxGroup
        options={[
          {label: 'Email Notifications', value: 'email'},
          {label: 'Push Notifications', value: 'push'},
          {label: 'SMS Notifications', value: 'sms'},
        ]}
        selectedValues={selectedOptions}
        onChange={values => setSelectedOptions(values)}
        size={24}
        borderColor="#2196F3"
        fillColor="#2196F3"
        labelStyle={styles.checkboxLabel}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('FeedbackFormScreen')}
        style={{
          borderWidth: 1,
          paddingVertical: 12,
          marginBlock: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Next Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
});

export default ProfileSettingsScreen;
