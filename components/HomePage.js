import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import logo from '../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';



const HomePage = ({ navigation }) => {

  const [maintenanceData, setMaintenanceData] = useState(null);

  useEffect(() => {
    const fetchMaintenanceData = async () => {
      try {
        const data = await AsyncStorage.getItem('maintenanceData');
        if (data) {
          setMaintenanceData(JSON.parse(data));
        }
      } catch (error) {
        console.error('Failed to fetch maintenance data: ', error);
      }
    };

    fetchMaintenanceData();
  }, []);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>AutoGuardian</Text>
        <Image style={styles.logo} source={logo} />
      </View>

      {/* Body */}
      <View style={styles.body}>
        <NotificationSection />
        <StatusSection />

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <FeatureCards navigation={navigation} />
        </ScrollView>

        <View style={styles.scrollIndicatorContainer}>
          <Icon name="angle-down" size={24} color="#95A5A6" />
        </View>

        <FindMechanicBtn />
      </View>

      {/* Footer */}
      <Footer navigation={navigation} />
    </View>
  );
};

const NotificationSection = () => (
    <>
      <Text style={styles.sectionTitle}>Notifications</Text>
      <View style={styles.notificationBox}>
        <Icon name="bell" size={20} color="#FFF" />
        <Text style={styles.notificationText}>Your next oil change is due in 500 miles.</Text>
      </View>
    </>
  );

const StatusSection = () => (
  <>
    <Text style={styles.sectionTitle}>Car Status</Text>
    <Text style={styles.statusText}>Oil: Good</Text>
    <Text style={styles.statusText}>Tire Pressure: Low</Text>
  </>
);

const FeatureCards = ({ navigation, maintenanceData }) => {
    const features = [
      {
        title: "Maintenance Schedule",
        text: `Next service: ${maintenanceData?.nextMaintenance || 'Not set'}`,
        nav: () => navigation.navigate('MaintenanceSchedule'),
        icon: 'calendar'
      },
      { title: "Tips & Tricks", text: "Rotate your tires every 6,000 miles to ensure even wear.", nav: () => navigation.navigate('TipsTricks'), icon: 'lightbulb-o' },
      { title: "Maintenance History", text: "View past maintenance activities.", nav: () => navigation.navigate('MaintenanceHistory'), icon: 'history' },
      { title: "Maintenance Tutorials", text: "Learn DIY car maintenance.", nav: () => navigation.navigate('MaintenanceTutorials'), icon: 'graduation-cap' },
      { title: "Parts Store", text: "Buy car parts and accessories.", nav: () => navigation.navigate('PartsStore'), icon: 'shopping-cart' },
      { title: "Fuel Log & Efficiency", text: "Track fuel consumption and efficiency.", nav: () => navigation.navigate('FuelLog'), icon: 'tachometer' },
      { title: "Expense Tracking", text: "Manage and visualize your car expenses.", nav: () => navigation.navigate('ExpenseTracker'), icon: 'money' }
    ];
    
    return features.map((feature, index) => (
        <TouchableOpacity key={index} style={styles.featureCard} onPress={feature.nav}>
          <View style={styles.cardHeader}>
            <Icon name={feature.icon} size={24} color="#34495E" style={styles.featureIcon} />
            <Text style={styles.cardTitle}>{feature.title}</Text>
          </View>
          <Text style={styles.cardText}>{feature.text}</Text>
        </TouchableOpacity>
      ));
    };
    
const FindMechanicBtn = () => (
    <TouchableOpacity style={styles.findMechanicBtn} onPress={() => {}}>
    <View style={styles.btnContent}>
        <Icon name="wrench" size={24} color="#FFF" style={styles.btnIcon} />
        <Text style={styles.btnText}>Find a Mechanic</Text>
    </View>
    </TouchableOpacity>
);

const Footer = ({ navigation }) => (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => {}}>
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
  );


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFCFF',
      paddingHorizontal: 20,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 30,
      marginBottom: 40,
    },
    headerText: {
      fontSize: 28,
      color: '#34495E',
      fontWeight: '700',
    },
    logo: {
      height: 60,
      resizeMode: 'contain', 
    },
    body: {
      flex: 1,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 24,
      color: '#34495E',
      fontWeight: '700',
      marginBottom: 20,
      paddingLeft: 10,
    },
    notificationText: {
      fontSize: 16,
      color: '#FFF',
      backgroundColor: '#2980B9',
      paddingVertical: 12,
      paddingHorizontal: 18,
      borderRadius: 12,
      marginBottom: 20,
      paddingLeft: 10,
    },
    statusText: {
      fontSize: 16,
      color: '#FFF',
      backgroundColor: '#E74C3C',
      paddingVertical: 12,
      paddingHorizontal: 18,
      borderRadius: 12,
      marginBottom: 20,
      paddingLeft: 10,
    },
    featureCard: {
      backgroundColor: '#FFF',
      paddingVertical: 20,
      paddingHorizontal: 25,
      borderRadius: 15,
      marginBottom: 20,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    cardTitle: {
      fontSize: 22,
      color: '#34495E',
      fontWeight: '600',
      marginBottom: 10,
    },
    cardText: {
      fontSize: 16,
      color: '#95A5A6',
    },
    findMechanicBtn: {
      backgroundColor: '#2980B9',
      paddingVertical: 14,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    btnText: {
      fontSize: 20,
      color: '#FFF',
      fontWeight: '700',
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

    notificationBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2980B9',
      paddingVertical: 8, 
      paddingHorizontal: 14, 
      borderRadius: 12,
      marginBottom: 15,  
    },

    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10, 
    },
    featureIcon: {
      marginRight: 10,
    },
    btnContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    btnIcon: {
      marginRight: 10, 
    },
    scrollIndicatorContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    scrollView: {
      marginBottom: 10, 
    },

  });

export default HomePage;