import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import logo from '../assets/logo.png';
import { useState } from 'react';
import google_icon from '../assets/google_icon.png';
import statefarm_icon from '../assets/statefarm_icon.png';
import { supabase } from '../supabase'; 

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(), // Trim email input to remove any extra spaces
      password: password,
    });

    if (error) {
      Alert.alert('Login Error', error.message);
    } else {
      navigation.navigate('HomePage');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>AutoGuardian</Text>
        <Image 
          style={{ height: 50 }}
          source={logo}
        />
      </View>
      <View style={styles.loginInfo}>
        <TextInput 
          placeholder="Email" 
          style={styles.input}
          onChangeText={setEmail}
          value={email} // Bind the value to the input state
          autoCapitalize="none" // Prevent automatic capitalization
          keyboardType="email-address" // Use the email keyboard type
        />
        <TextInput 
          placeholder="Password" 
          secureTextEntry={true} 
          style={styles.input} 
          onChangeText={setPassword}
          value={password} // Bind the value to the input state
        />
        <TouchableOpacity 
          style={{ flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 5 }}
          onPress={() => { navigation.navigate('HomePage') }}
        >
          <Text style={styles.underlinedText}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <ActivityIndicator size="small" color="black" /> // Show loading indicator when loading
          ) : (
            <Text style={{ color: 'black', fontSize: 20 }}>Login</Text>
          )}
        </TouchableOpacity>
        <View 
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* <Image source={google_icon}/> */}
          <Button title="Sign in with Google" color={'white'} onPress={() => {}} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          {/* <Image source={statefarm_icon}/> */}
          <Button title="Sign in with StateFarm" color={'white'} onPress={() => {}} />
        </View>
        <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
          <Text style={styles.underlinedText}>Create an account</Text>
        </TouchableOpacity>
      </View>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    paddingBottom: 50, 
  },
  headerText: {
    fontSize: 24, 
    color: 'white', 
    marginRight: 10, 
  },
  loginInfo: {
    flexDirection: 'column',
    gap: 7,
  },
  loginButton: {
    marginHorizontal: 100,
    marginVertical: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,  
    paddingHorizontal: 8,  
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  underlinedText: {
    textDecorationLine: 'underline',
    color: '#FFF',
    textAlign: 'center',
  },
});

export default LoginPage;
