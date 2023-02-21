import { View, Text, Button, TextInput } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = ({route}) => {
  const navigation = useNavigation();
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])
  
  return (
    <SafeAreaView className="flex justify-center items-center bg-backgr h-full ">
      <View> 
        <Text className="text-3xl pb-1 font-bold text-textColor">{route.params.route.params.name}</Text>
        <Text color="black">{route.params.age}</Text>
        <Text>{route.params.gender}</Text>
        {console.log(route)}
        <Button title='Continue' color="#1d253b" onPress={()=>{navigation.navigate('Dashboard');
    }
        
    }/>
    </View>
    </SafeAreaView>
  )
}

export default Dashboard;