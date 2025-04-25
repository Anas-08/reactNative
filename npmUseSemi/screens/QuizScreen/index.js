// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const QuizScreen = () => {
//   return (
//     <View>
//       <Text>QuizScreen</Text>
//     </View>
//   )
// }

// export default QuizScreen

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomRadioButtonGroup, CustomToastComponent } from 'react-native-ui-anas';
import { useNavigation } from '@react-navigation/native';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Rome', 'Berlin', 'London'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    answer: 'Mars',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Shakespeare', 'Charles Dickens', 'J.K. Rowling', 'Leo Tolstoy'],
    answer: 'Shakespeare',
  },
  {
    question: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    answer: 'Carbon Dioxide',
  },
  {
    question: 'Which is the smallest continent?',
    options: ['Australia', 'Europe', 'Antarctica', 'South America'],
    answer: 'Australia',
  },
];

const QuizScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showToast, setShowToast] = useState(false);

  const handleAnswer = (value) => {
    const updated = [...answers];
    updated[currentIndex] = value;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (!answers[currentIndex]) {
      setShowToast(true);
      return;
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const score = answers.filter((ans, i) => ans === questions[i].answer).length;
      navigation.navigate('Result', { score, total: questions.length });
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {currentIndex + 1}. {currentQuestion.question}
      </Text>

      <CustomRadioButtonGroup
        options={currentQuestion.options.map((opt) => ({ label: opt, value: opt }))}
        selectedValue={answers[currentIndex]}
        onChange={handleAnswer}
        type="circle"
        color="#007bff"
        size={24}
      />

      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Text style={styles.buttonText}>
          {currentIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </Text>
      </TouchableOpacity>

      <CustomToastComponent
        message="Please select an answer before continuing."
        position="top"
        duration={3000}
        backgroundColor="#FF6347"
        textColor="#fff"
        showProgressBar={false}
        visible={showToast}
        onHide={() => setShowToast(false)}
        progressLineHeight={0}
      />
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
