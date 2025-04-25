import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Checkbox, RadioButton, Toast, Captcha, CheckboxGroup, RadioButtonGroup } from '../Example/index'

const AppExampleOfLibJs = () => {
  // State for managing checkbox, radio button, and captcha
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('');
  const [score, setScore] = useState(0);
  const [captchaValid, setCaptchaValid] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Handle radio button change
  const handleRadioChange = (value) => {
    setSelectedRadio(value);
  };

  // Handle captcha validation
  const handleCaptchaValidation = (isValid) => {
    setCaptchaValid(isValid);
  };

  // Handle start button click
  const handleStartClick = () => {
    if (!isChecked) {
      alert("Please agree to the terms first.");
      return;
    }
    // Continue to quiz logic here
    setScore(0); // Reset score for demo
  };

  // Handle score calculation (example of quiz logic)
  const handleQuizAnswer = (answer) => {
    if (answer === 'Option 1') {
      setScore(score + 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Checkbox with "Agree" */}
      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        label="I agree"
        color="blue"
        size={30}
      />
      <Button title="Start" onPress={handleStartClick} />

      {/* Toast Message */}
      {!isChecked && <Toast message="Please agree first!" color="red" />}

      {/* Captcha for validation */}
      {captchaValid === false && (
        <Captcha onValidate={handleCaptchaValidation} />
      )}

      {/* Question 1 - Radio Buttons */}
      {score === 0 && (
        <View>
          <Text>Question 1: What is 1 + 1?</Text>
          <RadioButtonGroup
            options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
            selected={selectedRadio}
            onChange={handleRadioChange}
            color="green"
            size={20}
            type="circle"
          />
          <Button title="Next" onPress={() => handleQuizAnswer(selectedRadio)} />
        </View>
      )}

      {/* Show final score */}
      {score > 0 && <Toast message={`Your Score: ${score}`} color="green" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default AppExampleOfLibJs;
