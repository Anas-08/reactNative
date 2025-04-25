import React, { useState, useEffect } from 'react';
   import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

   export interface AnasCaptchaProps {
     onValidate: (isValid: boolean) => void;
   }

   const AnasCaptcha: React.FC<AnasCaptchaProps> = ({ onValidate }) => {
     const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
     const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
     const [userInput, setUserInput] = useState('');
     const [isValid, setIsValid] = useState(false);

     const correctAnswer = num1 + num2;

     const validateCaptcha = () => {
       const isCorrect = parseInt(userInput) === correctAnswer;
       setIsValid(isCorrect);
       onValidate(isCorrect);
     };

     const refreshCaptcha = () => {
       setNum1(Math.floor(Math.random() * 10));
       setNum2(Math.floor(Math.random() * 10));
       setUserInput('');
       setIsValid(false);
       onValidate(false);
     };

     useEffect(() => {
       refreshCaptcha();
     }, []);

     return (
       <View style={styles.container}>
         <Text style={styles.question}>
           What is {num1} + {num2}?
         </Text>
         <TextInput
           style={styles.input}
           value={userInput}
           onChangeText={setUserInput}
           keyboardType="numeric"
           placeholder="Enter answer"
         />
         <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button} onPress={validateCaptcha}>
             <Text style={styles.buttonText}>Validate</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={refreshCaptcha}>
             <Text style={styles.buttonText}>Refresh</Text>
           </TouchableOpacity>
         </View>
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: { marginVertical: 20 },
     question: { fontSize: 18, marginBottom: 10 },
     input: {
       borderWidth: 1,
       borderColor: '#000',
       borderRadius: 5,
       padding: 10,
       fontSize: 16,
       marginBottom: 10,
     },
     buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
     button: {
       backgroundColor: '#FF6347',
       padding: 10,
       borderRadius: 5,
       width: '45%',
       alignItems: 'center',
     },
     buttonText: { color: '#FFF', fontSize: 16 },
   });

   export default AnasCaptcha;


