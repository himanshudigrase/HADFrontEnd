import { View, Text, Button, TextInput } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';
import Categories from '../components/Categories';
const Dashboard = ({route}) => {
  const navigation = useNavigation();
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])
  console.log("In dashboard now")
  console.log(route);
  return (
    <View className=" bg-backgr h-full ">
    <Appbar.Header>
      <Appbar.Action icon="menu"/>
      <Appbar.Content title="Welcome User" />
      <Appbar.Action icon="cog"/>
    </Appbar.Header>
    <View className="">
      <Text></Text>
    <Categories />
    </View>
    {/* <Text>Recent Activity</Text> */}
    
    
    
    </View>
    // <SafeAreaView className="flex justify-center items-center bg-backgr h-full ">
    //   <View> 
    //     <Text className="text-3xl pb-1 font-bold text-textColor">Hey {route.params.demographics.firstName}</Text> 

    //      <Text color="black">You're {route.params.demographics.age} years old.</Text>
    //     <Text>You joined on  {route.params.patient.joiningDate}</Text> 
    //     {console.log(route)}
        
    // </View>
    // 
  )
}

export default Dashboard;


// {
//   "message":"Patient details added.",
//   "response":{
//      "demographics":{
//         "age":123,
//         "dob":"04/05/1899",
//         "firstName":"last",
//         "gender":"M",
//         "lastName":"prolly",
//         "userId":41
//      },
//      "email":"agf@gmail.com",
//      "password":"12345678",
//      "patient":{
//         "joiningDate":"25/02/2023",
//         "medicalHistory":[
//            "Object"
//         ],
//         "patientId":41,
//         "wantsDoc":false
//      },
//      "userId":41,
//      "userRole":{
//         "roleId":3,
//         "roleType":"Patient"
//      }
//   },
//   "success":true
// }