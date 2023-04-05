import Dashboard from '../screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import breath from '../screens/breath';
const Tab = createBottomTabNavigator();
import Experts from '../screens/DoctorList';
import MFList from '../screens/MF';
import { IconButton, MD3Colors } from 'react-native-paper';
import ChatComponent from '../screens/Chat';
export default function BottomNavbar(){
    return(
        <Tab.Navigator screenOptions={({route})=>({
            tabBarActiveTintColor: '#1d253b',
            tabBarIcon: ({color,focused})=>{
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
                else if(route.name=="Chat"){
                    iconName = focused ? 'chat' : 'chat-outline'
                }
                return <IconButton icon={iconName} size={24} color={color}/>
            }
        })}>
            <Tab.Screen name="Home" component={Dashboard} options={{headerShown:false}}/>
            <Tab.Screen name="Breathe" component={breath} options={{headerShown:false}}/>
            <Tab.Screen name='Experts' component={Experts} options={{headerShown:false}}/>
            <Tab.Screen name='Myths' component={MFList} options={{headerShown:false}}/>
            <Tab.Screen name='Chat' component={ChatComponent} />
        </Tab.Navigator>
    );
}