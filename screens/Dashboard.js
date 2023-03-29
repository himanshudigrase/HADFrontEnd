import { View, Text, Button, TextInput, ScrollView } from 'react-native'
import React,{useLayoutEffect, useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

import Activities from '../components/Activities';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import getAssignments from '../services/assignments';

const Dashboard = ({route}) => {

  const [doctorAssigned,setdoctorAssigned] = useState(false);
  const [activityDisplay,setActivityDisplay] = useState([]); // state of activities

  let activitiesToDisplay=[];
  let prvsActivities = activityDisplay;
  

  useEffect(() => {
    console.log("yes");
    (async function toFetchAssignments(){
      console.log("inside")
      try{

        activitiesToDisplay = await getAssignments();
        console.log("inside try");
        
        console.log(activitiesToDisplay)
        console.log("inside try2");
        activitiesToDisplay.forEach(activity =>{
          prvsActivities.push(activity);
        })
        console.log('prvsActivities')
        console.log(prvsActivities);
        setActivityDisplay(prvsActivities);
        setdoctorAssigned(true);
      } catch(error){
        console.error(error);
      }
    })();
  },[])
  
  
  //console.log(activityDisplay);
  const navigation = useNavigation();
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])
  console.log("In dashboard now")
  //console.log(route);
  return (
    // <Text>bfjsdbkj</Text>
    <>
    <View className="h-full bg-backgr w-full">
    <Header/>

    <ScrollView contentContainerStyle={{
        padding:15,
        paddingTop:10
    }}
    vertical
    showsVerticalScrollIndicator={true}>
      {doctorAssigned? 
      <View className="">       
        <Text>My Assignments</Text>
        {/* {activitiesToDisplay.forEach(activityToDisplay => { */}
          <Activities arrayOfActivities = {activityDisplay}/>
        {/*  })} */}
      </View> : <Text>Choose from our best doctors</Text>}
      
      <Text>Blogs</Text>
      <View className="w-full">  
        <Blogs className="w-screen"/>
      </View>
      
    </ScrollView>
    </View>
    </>
    
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