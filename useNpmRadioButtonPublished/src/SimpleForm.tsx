import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-anas';

type User = {
  id: string;
  name: string;
  age: string;
  email: string;
  gender: string;
  mobile: string;
};

const UserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<string | null>(null);
  const [mobile, setMobile] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const handleSubmit = () => {
    if (!name || !email || !gender) {
      alert('Please fill all required fields');
      return;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name,
      age,
      email,
      gender,
      mobile,
    };

    setUsers([...users, newUser]);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setAge('');
    setEmail('');
    setGender(null);
    setMobile('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Registration</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name*"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email*"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

<TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
      />
      
      
      <Text style={styles.label}>Gender*</Text>
      <RadioGroup
        options={genderOptions}
        selectedOption={gender}
        onSelect={setGender}
        radioProps={{
          color: '#FF6B6B',
          size: 22,
        }}
      />
      
   
      
      <Button title="Submit" onPress={handleSubmit} />
      
      <Text style={styles.subtitle}>Registered Users:</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age || 'N/A'}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Gender: {item.gender}</Text>
            <Text>Mobile: {item.mobile || 'N/A'}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  userItem: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default UserForm;