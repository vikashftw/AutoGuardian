import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';
import Icon from 'react-native-vector-icons/FontAwesome';

const FindMechanicPage = ({ navigation }) => {

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  // Dummy data for mechanic locations
  const mechanicLocations = [
    // Add your mechanic data here
    // { id: '1', title: 'Mechanic A', coordinates: [-122.4376, 37.7577] },
  ];

  return (
    <View style={styles.container}>
      <ReactMapGL
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken="YOUR_MAPBOX_TOKEN"
      >
        {/* User Location Control */}
        <GeolocateControl 
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />

        {/* Loop through mechanic locations and add them to the map */}
        {mechanicLocations.map(mechanic => (
          <Marker
            key={mechanic.id}
            longitude={mechanic.coordinates[0]}
            latitude={mechanic.coordinates[1]}
          >
            <div>{mechanic.title}</div>
          </Marker>
        ))}
      </ReactMapGL>

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
      backgroundColor: '#F3F4F6'
    },
    map: {
      flex: 1
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
      color: '#2980B9'
      ,fontWeight:'600',
      marginTop: 10,
    },
  });
  
  export default FindMechanicPage;