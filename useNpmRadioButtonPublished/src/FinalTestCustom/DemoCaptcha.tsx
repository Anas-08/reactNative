import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import CustomCaptcha from '../FinalCustomComponents/CustomCaptcha';

const CaptchaDemoScreen = () => {
  const [validation1, setValidation1] = useState(false);
  const [validation2, setValidation2] = useState(false);
  const [validation3, setValidation3] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CustomCaptcha Examples</Text>

      <CustomCaptcha onValidate={(isValid) => console.log('Result:', isValid)} />

<CustomCaptcha
  operation="subtraction"
  questionPrompt="Please subtract:"
  onValidate={(isValid) => alert(isValid ? 'Correct!' : 'Wrong!')}
/>

<CustomCaptcha
  operation="multiplication"
  validateButtonText="Check Answer"
  refreshButtonText="New Problem"
  textColor="#4B0082"
  backgroundColor="#F0F8FF"
  onValidate={(isValid) => console.log('Validated:', isValid)}
/>

<CustomCaptcha
  operation="division"
  successMessage="✅ Nailed it!"
  failureMessage="❌ Nope, try again."
  timeoutInSeconds={10}
  onValidate={(isValid) => console.log('Division test result:', isValid)}
/>

<CustomCaptcha
  operation="addition"
  autoValidate={false}
  showFeedback={false}
  buttonStyle={{ backgroundColor: '#008B8B' }}
  onValidate={(isValid) => console.log('Manual validation result:', isValid)}
/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  block: { marginBottom: 30 },
  label: { fontSize: 16, marginBottom: 10, fontWeight: '500' },
});

export default CaptchaDemoScreen;
