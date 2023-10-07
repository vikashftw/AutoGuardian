import LoginPage from './components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator() 
export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginPage} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}


