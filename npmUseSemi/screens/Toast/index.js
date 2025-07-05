import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { CustomToastComponent } from 'react-native-ready-use-component';

const ToastTest = () => {
    const [visible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Toast Example</Text>
      <Button title="Show Toast" onPress={() => setVisible(true)} />
      <CustomToastComponent
        message="Operation completed successfully!"
        visible={visible}
        duration={3000}
        backgroundColor="#4caf50"
        textColor="#fff"
        position="top"
        showCloseButton={true}
        onClose={() => setVisible(false)}
        animationType="spring"
        progressBar={true}
      />
      {/* <Button title="Next: Responsive" onPress={() => navigation.navigate('Responsive')} /> */}
    </View>
  )
}

export default ToastTest

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
})