// LoginPage.js
import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = ({ switchToSignUp }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {}} color="#FFF" />
        <Button title="Create Account" onPress={switchToSignUp} color="#FFF" />
      </View>
      <Button title="Sign in with Google" onPress={() => {}} />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.stateFarmText}>Sign in with your StateFarm account</Text>
      </TouchableOpacity>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stateFarmText: {
    textDecorationLine: 'underline',
    marginTop: 20,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default LoginPage;
