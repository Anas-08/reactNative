import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {CustomToastComponent} from 'react-native-ready-use-component';

const FeedbackFormScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Your Feedback</Text>
      <TextInput
        style={styles.input}
        value={feedback}
        onChangeText={setFeedback}
        placeholder="Enter feedback"
      />
      <Button title="Submit" onPress={() => setToastVisible(true)} />

      <CustomToastComponent
        message="Feedback submitted successfully!"
        visible={toastVisible}
        duration={2000}
        backgroundColor="#4CAF50"
        textColor="#fff"
        position="bottom"
        showCloseButton={false}
        onClose={() => setToastVisible(false)}
        animationType="spring"
        progressBar={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});

export default FeedbackFormScreen;
