import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import Progress from '../screens/Progress';

const Drawer = createDrawerNavigator();

const DrawerStack = () =>{
    return(
        <Drawer.Navigator  screenOptions = {{headerShown:false}}>
            
            <Drawer.Screen name = "Settings" component={Settings}/>
            <Drawer.Screen name = "Progress" component={Progress}/>
        </Drawer.Navigator>
    )
}

export default DrawerStack;