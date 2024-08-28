import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { supabase } from '../supabase';

const SignUpPage = ({ navigation }) => {
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

        try {
            const { error } = await supabase.auth.signUp({
                email: email.trim(), // Trim email input to remove extra spaces
                password: password,
            });

            if (error) {
                Alert.alert(error.message);
            } else {
                Alert.alert("Sign-up successful!");
                navigation.navigate('HomePage');
            }
        } catch (error) {
            console.error("Error during sign-up:", error);
            Alert.alert("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create account</Text>
            <TextInput 
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                autoCapitalize="none" // Ensure email input is not capitalized
                keyboardType="email-address" // Use the email keyboard for better UX
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
                style={styles.button}
                onPress={signUpWithEmail}
                disabled={loading} // Disable the button while loading
            >
                <Text style={styles.buttonText}>Sign up</Text>
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
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#FFF',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    button: {
        marginHorizontal: 100,
        marginVertical: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
    },
});

export default SignUpPage;
