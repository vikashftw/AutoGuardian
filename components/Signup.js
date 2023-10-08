import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,TouchableOpacity } from 'react-native';
import { supabase } from '../supabase';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function signUpWithEmail() {
        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match!");
            return;
        }
        
        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) Alert.alert(error.message);
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <Text 
                style={{fontSize: 24, color: 'white', flexDirection:'row', textAlign:'center', marginBottom:20}}
            >
                Create account
            </Text>
            <TextInput 
                placeholder="Email" 
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput 
                placeholder="Password"
                value={password} 
                onChangeText={setPassword}
                secureTextEntry={true} 
                style={styles.input}
            />
            <TextInput 
                placeholder="Confirm Password" 
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true} 
                style={styles.input}
            />
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
              onPress={signUpWithEmail}
            >
              <Text style={{color: 'black', fontSize: 20}}>Sign up</Text>
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
});

export default SignUpPage;
