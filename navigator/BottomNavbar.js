import Dashboard from '../screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import breath from '../screens/breath';
const Tab = createBottomTabNavigator();
import Saved from '../screens/DoctorList';
import Settings from '../screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconButton, MD3Colors } from 'react-native-paper';
export default function BottomNavbar(){
    return(
        <Tab.Navigator screenOptions={({route})=>({
            tabBarActiveTintColor: '#1d253b',
            tabBarIcon: ({color, size,focused})=>{
                let iconName;

                if(route.name === "Home"){
                    iconName = focused ? 'home' : 'home-outline'
                }
                else if(route.name === "Breathe"){
                    iconName = focused ? 'head-snowflake' : 'head-snowflake-outline'
                }
                else if(route.name=="Saved"){
                    iconName= focused ? 'bookmark' : 'bookmark-outline'
                }
                else if(route.name=="Settings"){
                    iconName = focused ? 'cog' : 'cog-outline'
                }
                return <IconButton icon={iconName} size={24} color={color}/>
            }
        })}>
            <Tab.Screen name="Home" component={Dashboard} options={{headerShown:false}}/>
            <Tab.Screen name="Breathe" component={breath} options={{headerShown:false}}/>
            <Tab.Screen name='Saved' component={Saved} options={{headerShown:false}}/>
            <Tab.Screen name='Settings' component={Settings} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}