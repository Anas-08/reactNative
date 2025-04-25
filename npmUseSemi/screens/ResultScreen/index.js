// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { CustomCaptcha, CustomCheckboxGroup, CustomRadioButtonGroup, CustomToastComponent  } from 'react-native-ui-anas';

// const ResultScreen = () => {
//   return (
//     <>

//     </>
  
//   )
// }

// export default ResultScreen

// const styles = StyleSheet.create({})


import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ResultScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { score = 0, total = 0 } = route.params || {};

  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 60,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleStartAgain = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Start' }],
    });
  };

  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.overlay}>
        <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.scoreTitle}>Your Score</Text>
          <Text style={styles.score}>
            {route.params.score} / {route.params.total}
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleStartAgain}>
            <Text style={styles.buttonText}>Start Again</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    width: '80%',
  },
  scoreTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#4CAF50',
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
