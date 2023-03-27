import React, { useState,useEffect,useCallback, useContext } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { NativeWindStyleSheet } from "nativewind";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DemoData from '../screens/DemoData';
import MedHistory from '../screens/MedHistory';
import Dashboard from '../screens/Dashboard';

import BottomNavbar from './BottomNavbar';
import DrawerStack from './DrawerStack';



const Stack = createNativeStackNavigator();




const AppStack = () => {
    return(
        
            <Stack.Navigator options={{headerShown:false}}>
                {/* <Stack.Screen name="Dashboard" component={Dashboard}/>  */}
                <Stack.Screen name="Dashboard" component={BottomNavbar} options={{headerShown:false}}/>           
                <Stack.Screen name="Drawer" component={DrawerStack}/>
            </Stack.Navigator>
        
        
           
    )
}

export default AppStack;