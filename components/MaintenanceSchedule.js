import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Picker, Button } from 'react-native';
import DatePicker from 'react-native-datepicker'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, DatePickerIOS } from 'react-native';

const PlatformDatePicker = ({ date, onDateChange, ...props }) => {
  if (Platform.OS === 'web') {
    // For web, use a simple input of type date
    return (
      <input 
        type="date"
        value={date.toISOString().split('T')[0]}
        onChange={e => onDateChange(new Date(e.target.value))}
      />
    );
  }

  // For mobile, use the DatePicker from react-native-datepicker
  return (
    <DatePicker
      date={date}
      mode="date"
      format="YYYY-MM-DD"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      onDateChange={onDateChange}
      {...props}
    />
  );
};


const MaintenanceSchedulePage = ({ navigation }) => {
  const [lastMaintenance, setLastMaintenance] = useState(new Date());
  const [frequency, setFrequency] = useState('1'); // Default to "Every Month"
  const [nextMaintenance, setNextMaintenance] = useState(new Date());

  useEffect(() => {
    const lastDate = new Date(lastMaintenance);
    const nextDate = new Date(lastMaintenance);
    nextDate.setMonth(lastDate.getMonth() + parseInt(frequency));

    setNextMaintenance(nextDate);
  }, [lastMaintenance, frequency]);

  const saveMaintenanceInfo = async () => {
    try {
      const maintenanceData = {
        lastMaintenance: lastMaintenance,
        frequency: frequency,
        nextMaintenance: nextMaintenance.toISOString()
      };
  
      await AsyncStorage.setItem('maintenanceData', JSON.stringify(maintenanceData));
      navigation.goBack();
    } catch (error) {
      console.error('Failed to save maintenance data: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maintenance Schedule</Text>

      <View style={styles.inputGroup}>
        <Text>Last Maintenance:</Text>
        <PlatformDatePicker 
        date={lastMaintenance}
        onDateChange={setLastMaintenance}/>
      </View>

      <View style={styles.inputGroup}>
        <Text>Maintenance Frequency:</Text>
        <Picker selectedValue={frequency} onValueChange={setFrequency}>
          <Picker.Item label="Every Month" value="1" />
          <Picker.Item label="Every 3 Months" value="3" />
          <Picker.Item label="Every 6 Months" value="6" />
          <Picker.Item label="Annually" value="12" />
        </Picker>
      </View>

      <Text>Next Maintenance Due: {nextMaintenance.toDateString()}</Text>

      <Button title="Save" onPress={saveMaintenanceInfo} />

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chatbot')}>
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

export default MaintenanceSchedulePage;