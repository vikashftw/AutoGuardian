import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, TextInput, SafeAreaView  } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Footer } from './HomePage';


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
    value={date}
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

  const [mileage, setMileage] = useState(''); // For storing car's current mileage
  const [lastOilChange, setLastOilChange] = useState(new Date());

  useEffect(() => {
    const lastDate = new Date(lastMaintenance);
    const nextDate = new Date(lastMaintenance);
  
    const parsedMileage = parseInt(mileage, 10);
    let timeBasedNextDate;
  
    if (!isNaN(parsedMileage)) {
      if (parsedMileage % 5000 === 0) {
        timeBasedNextDate = "It's time for an oil change!";
      } else if (parsedMileage % 15000 === 0) {
        timeBasedNextDate = "It's time to replace the air filter!";
      } else if (parsedMileage % 30000 === 0) {
        timeBasedNextDate = "It's time to change the air filter, fuel filter, and spark plugs!";
      } else if (parsedMileage % 40000 === 0) {
        timeBasedNextDate = "Inspect the ignition system and suspension!";
      } else if (parsedMileage % 60000 === 0) {
        timeBasedNextDate = "Replace brake fluid, pads, coolant, and inspect the transmission fluid!";
      }
    }
  
    nextDate.setMonth(lastDate.getMonth() + parseInt(frequency));
    setNextMaintenance(nextDate); 
  }, [lastMaintenance, frequency, mileage]);

      let nextMaintenanceText;
    if (typeof nextMaintenance === 'string') {
      nextMaintenanceText = nextMaintenance;
    } else {
      nextMaintenanceText = nextMaintenance.toLocaleDateString();

    }

  const saveMaintenanceInfo = async () => {
    try {
      const maintenanceData = {
        lastMaintenance: lastMaintenance,
        frequency: frequency,
        nextMaintenance: nextMaintenance.toISOString().split('T')[0]
      };
  
      await AsyncStorage.setItem('maintenanceData', JSON.stringify(maintenanceData));
      navigation.goBack();
    } catch (error) {
      console.error('Failed to save maintenance data: ', error);
    }
  };

  return (
    <View style={{flex:1}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Maintenance Schedule</Text>

        <View style={styles.inputGroup}>
          <Text>Mileage:</Text>
          <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value={mileage}
            onChangeText={setMileage}
            placeholder="Enter mileage (in miles)"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text>Last Maintenance:</Text>
          <PlatformDatePicker date={lastMaintenance} onDateChange={setLastMaintenance}/>
        </View>

        <View style={styles.inputGroup}>
          <Text>Last Oil Change:</Text>
          <PlatformDatePicker date={lastOilChange} onDateChange={setLastOilChange}/>
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

        <Text>Next Maintenance Due: {nextMaintenanceText}</Text>

        <Button title="Save" onPress={saveMaintenanceInfo} />
      </SafeAreaView>
      <Footer navigation={navigation} />
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F4F6',  
      margin:20,
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
    inputGroup: {
      marginVertical: 10,
      padding: 15,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    input: {
      borderColor: '#E0E0E0',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginTop: 5,
    }
  });

export default MaintenanceSchedulePage;