import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

import { REACT_APP_OPENAI_API_KEY } from "@env";



const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Fetch chat history from storage when the component mounts
    const fetchChatHistory = async () => {
      try {
        const storedHistory = await AsyncStorage.getItem('chatHistory');
        if (storedHistory) setChatHistory(JSON.parse(storedHistory));
      } catch (error) {
        console.error("Error fetching chat history from storage:", error);
      }
    };

    fetchChatHistory();
  }, []);

  const handleSend = async () => {
    if (message.trim() === '') return;

    const userMessage = { type: 'user', text: message.trim() };
    setChatHistory(currentHistory => [...currentHistory, userMessage]);

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: message,
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const botResponseText = response.data.choices[0].text.trim();
      const botMessage = { type: 'bot', text: botResponseText };
      setChatHistory(currentHistory => [...currentHistory, userMessage, botMessage]);

      // Store the updated chat history
      await AsyncStorage.setItem('chatHistory', JSON.stringify([...chatHistory, userMessage, botMessage]));

    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setMessage('');
  };

  const renderItem = ({ item }) => (
    <View style={item.type === 'user' ? styles.userMessage : styles.botMessage}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatHistory}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messageContainer}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Chatbot;