import LoginPage from './components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpPage from './components/Signup';
import ChatbotPage from './components/Chatbot';

const Stack = createNativeStackNavigator() 
export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{headerShown:false}}
          >
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="SignUp" component={SignUpPage}/>
            <Stack.Screen name="Chatbot" component={ChatbotPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}


