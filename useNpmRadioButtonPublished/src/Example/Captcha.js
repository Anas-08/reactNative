import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';

const Captcha = ({ onValidate }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [input, setInput] = useState('');

  useEffect(() => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setNum1(a);
    setNum2(b);
  }, []);

  useEffect(() => {
    if (parseInt(input) === num1 + num2) {
      onValidate(true);
    } else {
      onValidate(false);
    }
  }, [input]);

  return (
    <View>
      <Text>{`${num1} + ${num2} = ?`}</Text>
      <TextInput keyboardType="numeric" value={input} onChangeText={setInput} style={{ borderWidth: 1, padding: 5, marginTop: 5 }} />
    </View>
  );
};

export default Captcha;
