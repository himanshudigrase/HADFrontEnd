import AuthStack from "./AuthStack";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerStack from './DrawerStack';

function AppNav (){
    const {userToken,isLoading} = useContext(AuthContext);

    if(isLoading){
        <View className='flex-1 justifyContent-center'>
          <ActivityIndicator size={'large'} color='blue'/>
        </View>
      }

    return(       
          <NavigationContainer>
            {userToken  ? <DrawerStack/> :<AuthStack/> }
          </NavigationContainer>       
    )
}

export default AppNav;