import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Checkbox = ({ checked, onChange, label, type = 'square', color = 'blue', size = 24 }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onChange}>
      <View style={[styles.box, {
        width: size,
        height: type === 'rectangle' ? size / 2 : size,
        borderColor: color,
        borderRadius: type === 'square' ? 4 : 0,
        backgroundColor: checked ? color : 'transparent'
      }]} />
      <Text style={{ marginLeft: 8 }}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  box: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Checkbox;
