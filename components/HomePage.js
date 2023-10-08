import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../assets/logo.png';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.footerText}>Chat</Text>
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
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    headerText: {
      fontSize: 24, 
      color: 'white', 
      marginRight: 10,
    },
    body: {
      flex: 8,
      justifyContent: 'space-between',
    },
    sectionTitle: {
      fontSize: 20,
      color: 'white',
      marginVertical: 10,
    },
    notificationText: {
      fontSize: 16,
      color: '#FFF',
      backgroundColor: '#E94B35',
      padding: 12,
      borderRadius: 8,
      marginVertical: 5,
    },
    statusText: {
      fontSize: 16,
      color: '#FFF',
      backgroundColor: '#E94B35',
      padding: 12,
      borderRadius: 8,
      marginVertical: 5,
    },
    maintenanceCard: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      marginVertical: 10,
      elevation: 3,  // For Android shadow
      shadowColor: '#000', // For iOS shadow
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
      backgroundColor: 'white',
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
      color: '#D62311',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
    },
    footerText: {
      fontSize: 18,
      color: 'white',
    },
  });

  export default HomePage;
