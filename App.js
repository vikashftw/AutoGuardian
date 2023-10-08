import LoginPage from './components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpPage from './components/Signup';
import ChatbotPage from './components/Chatbot';
import HomePage from './components/HomePage';
import ProfilePage from './components/Profile';
import TipsAndTricksPage from './components/TipsTricks';
import MaintenanceSchedulePage from './components/MaintenanceSchedule';
import MaintenanceHistoryPage from './components/MaintenanceHistory';
import FindMechanicPage from './components/FindMechanic';

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
            <Stack.Screen name="HomePage" component={HomePage}/>
            <Stack.Screen name="Profile" component={ProfilePage}/>
            <Stack.Screen name="TipsTricks" component={TipsAndTricksPage}/>
            <Stack.Screen name="MaintenanceSchedule" component={MaintenanceSchedulePage}/>
            <Stack.Screen name="MaintenanceHistory" component={MaintenanceHistoryPage}/>
            <Stack.Screen name="FindMechanic" component={FindMechanicPage}/>

          </Stack.Navigator>
        </NavigationContainer>
      );
}


