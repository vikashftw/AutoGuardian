import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, TextInput, SafeAreaView, Platform } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      display="default"
      onChange={(event, selectedDate) => onDateChange(selectedDate || date)}
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

    if (!isNaN(parsedMileage)) {
      if (parsedMileage % 5000 === 0) {
        setNextMaintenance("It's time for an oil change!");
      } else if (parsedMileage % 15000 === 0) {
        setNextMaintenance("It's time to replace the air filter!");
      } else if (parsedMileage % 30000 === 0) {
        setNextMaintenance("It's time to change the air filter, fuel filter, and spark plugs!");
      } else if (parsedMileage % 40000 === 0) {
        setNextMaintenance("Inspect the ignition system and suspension!");
      } else if (parsedMileage % 60000 === 0) {
        setNextMaintenance("Replace brake fluid, pads, coolant, and inspect the transmission fluid!");
      } else {
        nextDate.setMonth(lastDate.getMonth() + parseInt(frequency));
        setNextMaintenance(nextDate); 
      }
    } else {
      nextDate.setMonth(lastDate.getMonth() + parseInt(frequency));
      setNextMaintenance(nextDate); 
    }
  }, [lastMaintenance, frequency, mileage]);

  const saveMaintenanceInfo = async () => {
    try {
      const maintenanceData = {
        lastMaintenance: lastMaintenance.toISOString().split('T')[0],
        frequency: frequency,
        nextMaintenance: nextMaintenance instanceof Date ? nextMaintenance.toISOString().split('T')[0] : nextMaintenance,
      };

      await AsyncStorage.setItem('maintenanceData', JSON.stringify(maintenanceData));
      navigation.goBack();
    } catch (error) {
      console.error('Failed to save maintenance data: ', error);
    }
  };

  const nextMaintenanceText = nextMaintenance instanceof Date ? nextMaintenance.toLocaleDateString() : nextMaintenance;

  return (
    <View style={{ flex: 1 }}>
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
          <PlatformDatePicker date={lastMaintenance} onDateChange={setLastMaintenance} />
        </View>

        <View style={styles.inputGroup}>
          <Text>Last Oil Change:</Text>
          <PlatformDatePicker date={lastOilChange} onDateChange={setLastOilChange} />
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
    margin: 20,
  },
  title: {
    fontSize: 24, 
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
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
  },
});

export default MaintenanceSchedulePage;
