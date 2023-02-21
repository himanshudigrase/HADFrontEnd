import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { NativeWindStyleSheet } from "nativewind";
import HomeScreen from './screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Login from './screens/Login';
import DemoData from './screens/DemoData';
import Signup from './screens/Signup'
import MedHistory from './screens/MedHistory';
import Dashboard from './screens/Dashboard';





NativeWindStyleSheet.setOutput({
  default: "native",
});
const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="DemoData" component={DemoData}/>
      <Stack.Screen name="MedHistory" component={MedHistory}/>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

