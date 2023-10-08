import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

const MaintenanceHistoryPage = ({ navigation }) => {
    const [maintenanceHistories, setMaintenanceHistories] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [currentMaintenance, setCurrentMaintenance] = useState({
        title: '',
        date: '',
        details: ''
    });

    const saveMaintenanceHistory = async () => {
        const updatedHistories = [...maintenanceHistories, currentMaintenance];
        setMaintenanceHistories(updatedHistories);
        await AsyncStorage.setItem('maintenanceHistories', JSON.stringify(updatedHistories));
        setCurrentMaintenance({ title: '', date: '', details: '' });
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Maintenance History</Text>

            <FlatList 
                data={maintenanceHistories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.maintenanceCard}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text>Date: {item.date}</Text>
                        <Text>Details: {item.details}</Text>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Icon name="plus" size={20} color="#FFF" />
            </TouchableOpacity>

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalView}>
                    <TextInput
                        placeholder="Title"
                        style={styles.input}
                        value={currentMaintenance.title}
                        onChangeText={(text) => setCurrentMaintenance({ ...currentMaintenance, title: text })}
                    />
                    <TextInput
                        placeholder="Date"
                        style={styles.input}
                        value={currentMaintenance.date}
                        onChangeText={(text) => setCurrentMaintenance({ ...currentMaintenance, date: text })}
                    />
                    <TextInput
                        placeholder="Details"
                        style={styles.input}
                        value={currentMaintenance.details}
                        onChangeText={(text) => setCurrentMaintenance({ ...currentMaintenance, details: text })}
                    />
                    <TouchableOpacity style={styles.saveButton} onPress={saveMaintenanceHistory}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* Footer */}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F4F6',
      padding: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      fontWeight: 'bold',
      color: '#333'
    },
    maintenanceCard: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      marginVertical: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    cardTitle: {
      fontSize: 18,
      color: '#333',
      marginBottom: 5,
    },
    addButton: {
      position: 'absolute',
      right: 20,
      bottom: 70,
      backgroundColor: '#3498db',
      borderRadius: 50,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    modalView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    input: {
      width: 300,
      padding: 10,
      marginVertical: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: '#E0E0E0',
      borderWidth: 1
    },
    saveButton: {
      backgroundColor: '#3498db',
      padding: 12,
      borderRadius: 8,
      marginTop: 20,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    saveButtonText: {
      fontSize: 18,
      color: '#FFF',
    },
    closeButton: {
      marginTop: 20,
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
    }
});

export default MaintenanceHistoryPage;