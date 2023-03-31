import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavbar from './BottomNavbar';
import Blog from '../screens/Blog';
import Activity from '../screens/Activity';
import Post from '../screens/Post';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(         
            <Stack.Navigator options={{headerShown:false}}>
                <Stack.Screen name="Dashboard" component={BottomNavbar} options={{headerShown:false}}/>           
                <Stack.Screen name="Blogs" component={Blog} options={{headerShown:false}}/>
                <Stack.Screen name="Activity" component={Activity}/>
                <Stack.Screen name="Post" component={Post}/>
            </Stack.Navigator>          
    )
}

export default AppStack;