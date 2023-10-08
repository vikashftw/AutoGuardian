import React, { useState, useEffect } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


const ProfilePage = ({ navigation }) => {
    const [user, setUser] = useState({});
    const [carInfo, setCarInfo] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // fetchData() fetches data from the backend
        fetchData();
    }, []);

    const fetchData = async () => {
        // For testing purposes
        const fetchedUser = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            // avatar: 'link_to_avatar_image',
        };

        const fetchedCarInfo = {
            make: 'Toyota',
            model: 'Camry',
            year: '2020',
        };

        setUser(fetchedUser);
        setCarInfo(fetchedCarInfo);
    };

    const handleSave = () => {
        // API call to update the user data on the backend.
        // saveData() does that
        saveData(user, carInfo);

        setIsEditing(false);
    };

    const saveData = async (userData, carData) => {
        // API call to save data on the backend.
        console.log('Saving...', userData, carData);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.username}>{user.name}</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.sectionTitle}>User Information</Text>
                <View style={styles.infoSection}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput 
                        value={user.email} 
                        onChangeText={(email) => setUser({ ...user, email })}
                        style={styles.input} 
                        editable={isEditing} 
                    />
                </View>
                
                <Text style={styles.sectionTitle}>Car Information</Text>
                <View style={styles.infoSection}>
                    <Text style={styles.label}>Make:</Text>
                    <TextInput 
                        value={carInfo.make}
                        onChangeText={(make) => setCarInfo({ ...carInfo, make })}
                        style={styles.input} 
                        editable={isEditing} 
                    />
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.label}>Model:</Text>
                    <TextInput 
                        value={carInfo.model}
                        onChangeText={(model) => setCarInfo({ ...carInfo, model })}
                        style={styles.input} 
                        editable={isEditing} 
                    />
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.label}>Year:</Text>
                    <TextInput 
                        value={carInfo.year}
                        onChangeText={(year) => setCarInfo({ ...carInfo, year })}
                        style={styles.input} 
                        editable={isEditing} 
                    />
                </View>

                {isEditing ? (
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                    <Icon name="home" size={20} color="#2980B9" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon name="user" size={20} color="#2980B9" />
                    <Text style={styles.footerText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chatbot')}>
                    <Icon name="comments" size={20} color="#2980B9" />
                    <Text style={styles.footerText}>Chat</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        margin: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        borderBottomWidth: 0.5,
        borderColor: '#E0E0E0',
        paddingBottom: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
    },
    username: {
        fontSize: 24,
        color: '#2980B9',
        fontWeight: 'bold',
    },
    infoContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 18, 
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    sectionTitle: {
        fontSize: 22,
        color: '#2980B9', 
        marginBottom: 20,
        fontWeight: '600',
    },
    infoSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18, 
    },
    label: {
        fontSize: 18,
        color: '#777',
        width: '30%',
    },
    input: {
        fontSize: 18,
        color: '#333',
        borderBottomWidth: 1,
        width: '65%',
        textAlign: 'right',
    },
    editButton: {
        backgroundColor: '#2980B9', 
        padding: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    saveButton: {
        backgroundColor: '#2ecc71', 
        padding: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#DDE2E7',
        paddingVertical: 20,
        backgroundColor: '#FFF',
        elevation: 4,
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
  
      footerText: {
        fontSize: 18,
        color: '#2980B9',
        fontWeight: '600',
        marginTop: 10, 
      },
});


export default ProfilePage;