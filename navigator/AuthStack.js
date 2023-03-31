import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Signup from '../screens/Signup';
import DemoData from '../screens/DemoData';
import MedHistory from '../screens/MedHistory';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(       
        <Stack.Navigator options={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="DemoData" component={DemoData}/>
            <Stack.Screen name="MedHistory" component={MedHistory}/>
        </Stack.Navigator>       
    )
}
export default AuthStack;