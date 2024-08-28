import LoginPage from "./components/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpPage from "./components/Signup";
import ChatbotPage from "./components/Chatbot";
import HomePage from "./components/HomePage";
import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import ProfilePage from "./components/Profile";
import TipsAndTricksPage from "./components/TipsTricks";
import MaintenanceSchedulePage from "./components/MaintenanceSchedule";
import MaintenanceHistoryPage from "./components/MaintenanceHistory";

const Stack = createNativeStackNavigator();
export default function App() {
  const [initialRoute, setInitialRoute] = useState("Login");
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const user = supabase.auth.user();
      console.log("Current user: ", user);
      if (user) {
        setInitialRoute("HomePage");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Chatbot" component={ChatbotPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="TipsTricks" component={TipsAndTricksPage} />
        <Stack.Screen
          name="MaintenanceSchedule"
          component={MaintenanceSchedulePage}
        />
        <Stack.Screen
          name="MaintenanceHistory"
          component={MaintenanceHistoryPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
