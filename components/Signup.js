// SignUpPage.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.input} />
      <Button title="Sign Up" color={'white'} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D62311',
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default SignUpPage;
