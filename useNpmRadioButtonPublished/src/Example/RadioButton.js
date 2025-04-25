import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = ({ selected, onSelect, label, type = 'circle', size = 24, color = 'blue' }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <View style={[styles.outer, {
        borderColor: color,
        borderRadius: type === 'circle' ? size : 4,
        width: size,
        height: size
      }]}>
        {selected && <View style={[styles.inner, {
          backgroundColor: color,
          borderRadius: type === 'circle' ? size / 2 : 2,
          width: size / 2,
          height: size / 2
        }]} />}
      </View>
      <Text style={{ marginLeft: 8 }}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  outer: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {}
});

export default RadioButton;
