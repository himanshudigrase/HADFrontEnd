import Dashboard from '../screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import breath from '../screens/breath';
const Tab = createBottomTabNavigator();
import Experts from '../screens/DoctorList';
import Settings from '../screens/Settings';
import MFList from '../screens/MF';
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
                else if(route.name=="Experts"){
                    iconName= focused ? 'account-tie' : 'account-tie-outline'
                }
                else if(route.name=="Myths"){
                    iconName = focused ? 'bookmark' : 'bookmark-outline'
                }
                return <IconButton icon={iconName} size={24} color={color}/>
            }
        })}>
            <Tab.Screen name="Home" component={Dashboard} options={{headerShown:false}}/>
            <Tab.Screen name="Breathe" component={breath} options={{headerShown:false}}/>
            <Tab.Screen name='Experts' component={Experts} options={{headerShown:false}}/>
            <Tab.Screen name='Myths' component={MFList} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}