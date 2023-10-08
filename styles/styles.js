import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  messageContainer: {
    padding: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e6e6e6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
  },
  loadingIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});