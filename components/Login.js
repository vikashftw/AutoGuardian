import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../assets/logo.png';
import google_icon from '../assets/google_icon.png';
import statefarm_icon from '../assets/statefarm_icon.png';


const LoginPage = ({navigation}) => {
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
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
            <TouchableOpacity 
                style={{flexDirection:'column', alignItems:'start', paddingLeft: 5}}
                onPress={() => {navigation.navigate('SignUp')}}
            >
                <Text style={styles.underlinedText}>Forgot Password</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        // Handle login button press
                    }}
                    >
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>        
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center' }}>
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
