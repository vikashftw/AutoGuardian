import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const TipsAndTricksPage = ({ navigation }) => {
    const tips = [
        "Rotate your tires every 6,000 miles to ensure even wear.",
        "Regularly check and change your oil to keep your engine running smoothly.",
        "Inspect and replace brake pads if you hear a high-pitched squealing.",
        "Check your tire pressure every month to avoid a flat.",
        "Replace windshield wiper blades once they start streaking.",
        "Change your car's air filter annually or as recommended by the manufacturer.",
        "Flush the coolant system and change the coolant at least once a year.",
        "Inspect your belts and hoses regularly for signs of wear or cracks.",
        "Use a high-quality fuel treatment periodically to keep the fuel system clean.",
        "Ensure your battery terminals are clean and free from corrosion.",
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Tips & Tricks</Text>
            {tips.map((tip, index) => (
                <View key={index} style={styles.tipCard}>
                    <Text style={styles.tipText}>{tip}</Text>
                </View>
            ))}
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        padding: 20,
    },
    tipCard: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        marginVertical: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    tipText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 24,
        color: '#333',
        marginBottom: 20,
        fontWeight: '600',
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

export default TipsAndTricksPage;