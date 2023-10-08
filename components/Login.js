import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import logo from '../assets/logo.png';
import { useState } from 'react';
import google_icon from '../assets/google_icon.png';
import statefarm_icon from '../assets/statefarm_icon.png';
import { supabase } from '../supabase'; 

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    else{
      navigation.navigate('Chatbot')
    }
    setLoading(false)
  };


  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>AutoGuardian</Text>
            <Image 
                style={{height:50}}
                source={logo}
            />
        </View>
        <View style={styles.loginInfo}>
            <TextInput 
              placeholder="Email" 
              style={styles.input}
              onChangeText={setEmail}
            />
            <TextInput 
              placeholder="Password" 
              secureTextEntry={true} 
              style={styles.input} 
              onChangeText={setPassword}
            />
            <TouchableOpacity 
                style={{flexDirection:'column', alignItems:'start', paddingLeft: 5}}
                onPress={() => {navigation.navigate('SignUp')}}
            >
                <Text style={styles.underlinedText}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginHorizontal:100,
                marginVertical:15,
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 6,  
                paddingHorizontal: 8  
              }}
              onPress={handleLogin}
            >
              <Text style={{color: 'black', fontSize: 20}}>Login</Text>
            </TouchableOpacity>
            <View 
              style={{flexDirection:'row', alignItems:'center', justifyContent: 'center'}}
            >
                {/* <Image  source={google_icon}/> */}
                <Button style={{borderWidth:2}}title="Sign in with Google" color={'white'} onPress={() => {}} />
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center' }}>
                {/* <Image source={statefarm_icon}/> */}
                <Button title="Sign in with StateFarm" color={'white'} onPress={() => {}} />
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}}>
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
    justifyContent:'center',
    fontSize: 16,
    paddingBottom: 50, 
  },
  headerText: {
    fontSize: 24, 
    color: 'white', 
    marginRight: 10, 
  },
  loginInfo: {
    flex: 'col',
    gap: 7,
  },
  loginBtnStyle:{
    backgroundColor:'white', 
    color: 'black',
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
