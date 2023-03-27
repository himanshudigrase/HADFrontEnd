import { View, Text, Button, TextInput, ScrollView } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import Activities from '../components/Activities';
import Header from '../components/Header';
import Blogs from '../components/Blogs';

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
    <View className="h-full bg-backgr w-full">
    <Header/>

    <ScrollView contentContainerStyle={{
        padding:15,
        paddingTop:10
    }}
    vertical
    showsVerticalScrollIndicator={true}>
      <View className="">
        <Text>My Activities</Text>
        <Activities />
      </View>
      <Text>Blogs</Text>
      <View className="w-full">  
        <Blogs className="w-screen"/>
      </View>
      
    </ScrollView>
    </View>
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