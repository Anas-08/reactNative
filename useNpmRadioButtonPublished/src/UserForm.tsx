import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
  Easing,
  Image,
  Alert
} from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-anas';

// Import local assets (you'll need to add these image files to your project)
const personIcon = require('./assets/person.png');
const cakeIcon = require('./assets/cake.png');
const emailIcon = require('./assets/email.png');
const phoneIcon = require('./assets/phone.png');
const accountIcon = require('./assets/account.png');
const arrowUpIcon = require('./assets/up-arrow.png');
const arrowDownIcon = require('./assets/arrow-down.png');
const peopleIcon = require('./assets/people.png');

type User = {
  id: string;
  name: string;
  age: string;
  email: string;
  gender: string;
  mobile: string;
};

const UserFormTest = () => {

  console.log("From Screen render...")

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<string | null>(null);
  const [mobile, setMobile] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [showUsers, setShowUsers] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const animateForm = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  const handleSubmit = () => {
    if (!name || !email || !gender) {
      Alert.alert('Please fill all required fields');
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
    animateForm();
  };

  const resetForm = () => {
    setName('');
    setAge('');
    setEmail('');
    setGender(null);
    setMobile('');
  };

  const toggleUsersList = () => {
    setShowUsers(!showUsers);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={[styles.formContainer, { opacity: fadeAnim }]}>
          <Text style={styles.title}>Create Your Account</Text>
          <Text style={styles.subtitle}>Join our community today</Text>

          <View style={styles.inputContainer}>
            <Image source={personIcon} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image source={cakeIcon} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Age"
              placeholderTextColor="#999"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Image source={emailIcon} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Image source={phoneIcon} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="#999"
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
            />
          </View>

          <Text style={styles.sectionTitle}>Gender</Text>
          <RadioGroup
            options={genderOptions}
            selectedOption={gender}
            onSelect={setGender}
            radioProps={{
              color: '#6C63FF',
              size: 22,
              labelStyle: styles.radioLabel,
              containerStyle: { marginVertical: 8 }
            }}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Register Now</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.toggleButton} 
            onPress={toggleUsersList}
          >
            <Text style={styles.toggleButtonText}>
              {showUsers ? 'Hide Registered Users' : 'Show Registered Users'}
            </Text>
            <Image 
              source={showUsers ? arrowUpIcon : arrowDownIcon} 
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </Animated.View>

        {showUsers && (
          <Animated.View 
            style={[styles.usersContainer, { opacity: fadeAnim }]}
          >
            <Text style={styles.usersTitle}>Registered Users</Text>
            <FlatList
              data={users}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.userCard}>
                  <View style={styles.userHeader}>
                    <Image source={accountIcon} style={styles.accountIcon} />
                    <Text style={styles.userName}>{item.name}</Text>
                  </View>
                  <View style={styles.userDetails}>
                    <View style={styles.detailRow}>
                      <Image source={emailIcon} style={styles.smallIcon} />
                      <Text style={styles.detailText}>{item.email}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailText}>Gender: {item.gender}</Text>
                    </View>
                    {item.age && (
                      <View style={styles.detailRow}>
                        <Image source={cakeIcon} style={styles.smallIcon} />
                        <Text style={styles.detailText}>{item.age} years</Text>
                      </View>
                    )}
                    {item.mobile && (
                      <View style={styles.detailRow}>
                        <Image source={phoneIcon} style={styles.smallIcon} />
                        <Text style={styles.detailText}>{item.mobile}</Text>
                      </View>
                    )}
                  </View>
                </View>
              )}
              ListEmptyComponent={
                <View style={styles.emptyList}>
                  <Image source={peopleIcon} style={styles.peopleIcon} />
                  <Text style={styles.emptyText}>No users registered yet</Text>
                </View>
              }
            />
          </Animated.View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  formContainer: {
    padding: 25,
    backgroundColor: '#FFF',
    borderRadius: 15,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F3F6',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#6C63FF',
  },
  input: {
    flex: 1,
    height: 50,
    color: '#333',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginTop: 10,
    marginBottom: 15,
  },
  radioLabel: {
    fontSize: 16,
    color: '#444',
  },
  submitButton: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
  },
  toggleButtonText: {
    color: '#6C63FF',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 5,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: '#6C63FF',
  },
  usersContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  usersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 15,
    textAlign: 'center',
  },
  userCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  accountIcon: {
    width: 32,
    height: 32,
    tintColor: '#6C63FF',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  userDetails: {
    marginLeft: 42,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  smallIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: '#777',
  },
  detailText: {
    fontSize: 14,
    color: '#555',
  },
  emptyList: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  peopleIcon: {
    width: 40,
    height: 40,
    tintColor: '#ccc',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});

export default UserFormTest;