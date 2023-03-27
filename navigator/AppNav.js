import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "@react-native-material/core";

function AppNav (){
    const {isLoading,userToken} = useContext(AuthContext);

    if(isLoading){
        <View className='flex-1 justifyContent-center'>
          <ActivityIndicator size={'large'}/>
        </View>
      }
      return(
        <NavigationContainer>
            <Stack.Navigator options={{headerShown:false}}>
            {userToken!==null ? <AppStack/> : <AuthStack/>}
            </Stack.Navigator>
                       
        </NavigationContainer>
      )
}

export default AppNav;