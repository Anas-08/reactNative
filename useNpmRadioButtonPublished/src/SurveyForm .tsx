import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-anas";

const SurveyForm = () => {
    const [q1, setQ1] = useState<string | null>(null);
    const [q2, setQ2] = useState<string | null>(null);
  
    const satisfactionOptions = [
      { label: 'Very Satisfied', value: 'very_satisfied' },
      { label: 'Satisfied', value: 'satisfied' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Dissatisfied', value: 'dissatisfied' },
    ];
  
    const frequencyOptions = [
      { label: 'Daily', value: 'daily' },
      { label: 'Weekly', value: 'weekly' },
      { label: 'Monthly', value: 'monthly' },
    ];
  
    return (
      <View style={surveyStyles.container}>
        <Text style={surveyStyles.header}>Customer Survey</Text>
  
        <View style={surveyStyles.questionContainer}>
          <Text style={surveyStyles.question}>1. How satisfied are you?</Text>
          <RadioGroup
            options={satisfactionOptions}
            selectedOption={q1}
            onSelect={setQ1}
            radioProps={{ color: '#6B5B95' }}
          />
        </View>
  
        <View style={surveyStyles.questionContainer}>
          <Text style={surveyStyles.question}>2. How often do you use our product?</Text>
          <RadioGroup
            options={frequencyOptions}
            selectedOption={q2}
            onSelect={setQ2}
            // radioProps={{ color: '#88B04B' }}
            radioProps={{ color: 'tomato' }}
          />
        </View>
      </View>
    );
  };
  
  const surveyStyles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: 'white',
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#2A3439',
    },
    questionContainer: {
      marginBottom: 25,
    },
    question: {
      fontSize: 16,
      marginBottom: 10,
      color: '#5E6B73',
    },
  });


  export default SurveyForm;