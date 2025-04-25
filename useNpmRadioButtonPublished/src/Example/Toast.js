import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Toast = ({ message = '', color = 'red' }) => {
  if (!message) return null;
  return (
    <View style={[styles.toast, { backgroundColor: color }]}>
      <Text style={{ color: '#fff' }}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    padding: 10,
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    borderRadius: 6,
    zIndex: 999,
  }
});

export default Toast;
