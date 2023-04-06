import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Progress from '../screens/Progress';
import AppStack from './AppStack';
import CustomDrawer from '../components/CustomDrawer';
import MoodTracker from '../screens/MoodTracker';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (       
            <Drawer.Navigator useLegacyImplementation={false} drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Dash" component={AppStack} />
                <Drawer.Screen name="Mood" component={MoodTracker} />
                <Drawer.Screen name="Progress" component={Progress} />
            </Drawer.Navigator>       
    )
}

export default DrawerStack;