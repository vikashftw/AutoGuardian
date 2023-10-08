import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import logo from '../assets/logo.png';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>AutoGuardian</Text>
            <Image 
                style={{height:50}}
                source={logo}
            />
        </View>
        
        <View style={styles.body}>
            <Text style={styles.sectionTitle}>Notifications</Text>
            {/* Sample notification, this can be repeated or dynamically generated */}
            <Text style={styles.notificationText}>Your next oil change is due in 500 miles.</Text>
            
            <Text style={styles.sectionTitle}>Car Status</Text>
            {/* Sample status, these can be repeated or dynamically generated */}
            <Text style={styles.statusText}>Oil: Good</Text>
            <Text style={styles.statusText}>Tire Pressure: Low</Text>
            
            <TouchableOpacity style={styles.maintenanceCard} onPress={() => {}}>
                <Text style={styles.cardTitle}>Maintenance Schedule</Text>
                <Text style={styles.cardText}>Next service due: Nov 25</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.tipsCard} onPress={() => {}}>
                <Text style={styles.cardTitle}>Tips & Tricks</Text>
                <Text style={styles.cardText}>Rotate your tires every 6,000 miles to ensure even wear.</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.findMechanicBtn} onPress={() => {}}>
                <Text style={styles.btnText}>Find a Mechanic</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => {}}>
                <Text style={styles.footerText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.footerText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chatbot')}>
                <Text style={styles.footerText}>Chat</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F4F6',  
      margin: 20,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    headerText: {
      fontSize: 24, 
      color: '#333',  
      marginRight: 10,
    },
    body: {
      flex: 8,
      justifyContent: 'space-between',
    },
    sectionTitle: {
      fontSize: 20,
      color: '#333',
      marginVertical: 10,
    },
    notificationText: {
      fontSize: 16,
      color: '#FFF',
      backgroundColor: '#3498db',  
      padding: 12,
      borderRadius: 8,
      marginVertical: 5,
    },
    statusText: {
      fontSize: 16,
      color: '#FFF',
      backgroundColor: '#E74C3C',  
      padding: 12,
      borderRadius: 8,
      marginVertical: 5,
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
    tipsCard: {
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
    cardText: {
      fontSize: 16,
      color: '#555',
    },
    findMechanicBtn: {
      backgroundColor: '#3498db',  
      padding: 12,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    btnText: {
      fontSize: 18,
      color: '#FFF',  
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#E0E0E0',  
      paddingVertical: 10,
      backgroundColor: '#FFF',
      elevation: 3,
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    footerText: {
      fontSize: 16,
      color: '#3498db',
      fontWeight: '500',
    },
  });

export default HomePage;