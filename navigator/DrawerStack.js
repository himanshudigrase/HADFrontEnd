import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import Progress from '../screens/Progress';
import AppStack from './AppStack';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (       
            <Drawer.Navigator useLegacyImplementation={false} drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Dash" component={AppStack} />
                <Drawer.Screen name="Settings" component={Settings} />
                <Drawer.Screen name="Progress" component={Progress} />
            </Drawer.Navigator>       
    )
}

export default DrawerStack;