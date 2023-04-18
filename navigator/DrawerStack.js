import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MoodTracker from '../screens/MoodTracker';
import AppStack from './AppStack';
import CustomDrawer from '../components/CustomDrawer';


const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (       
            <Drawer.Navigator useLegacyImplementation={false} drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="DashBoard" component={AppStack} />
                {/* <Drawer.Screen name="MoodO" component={MoodTracker} /> */}
                <Drawer.Screen name="Mood" component={MoodTracker} />
            </Drawer.Navigator>       
    )
}

export default DrawerStack;