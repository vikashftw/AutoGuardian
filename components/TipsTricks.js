import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity  } from 'react-native';

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
            {tips.map((tip, index) => (
                <View key={index} style={styles.tipCard}>
                    <Text style={styles.tipText}>{tip}</Text>
                </View>
            ))}

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.footerText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chatbot')}>
                    <Text style={styles.footerText}>Chat</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        padding: 20,
    },
    tipCard: {
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
    tipText: {
        fontSize: 16,
        color: '#555',
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
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

export default TipsAndTricksPage;