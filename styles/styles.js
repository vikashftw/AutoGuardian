import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  messageContainer: {
    flex: 1,
    padding: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007BFF',
    padding: 12, // Increased padding for better readability
    fontSize: 18,
    borderRadius: 8, // Increased borderRadius for smoother corners
    marginBottom: 10,
    maxWidth: '80%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e6e6e6',
    padding: 12, // Increased padding for consistency
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 10,
    maxWidth: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    borderTopWidth: 0.5,
    borderTopColor: '#DADADA',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    elevation: 2, 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 2.5, 
  },
  sendButtonText: {
    color: 'white',
    fontWeight: '600', 
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
