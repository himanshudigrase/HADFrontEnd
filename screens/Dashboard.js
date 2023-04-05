import { View, Text, Button, TextInput, ScrollView } from 'react-native'
import React,{useLayoutEffect, useState,useEffect, useContext} from 'react'
import { useNavigation } from '@react-navigation/native';

import Activities from '../components/Activities';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import getAssignments from '../services/assignments';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  {GetSortOrder}  from '../functions/sortFunctionActivity'; 

const Dashboard = ({route}) => {
  const {name} = useContext(AuthContext);
  const [doctorAssigned,setdoctorAssigned] = useState(false);
  const [activityDisplay,setActivityDisplay] = useState([]); 

  let activitiesToDisplay=[];
  let prvsActivities = activityDisplay;
  

  useEffect(() => {
    (async function toFetchAssignments(){
      try{
        const getPatient = await AsyncStorage.getItem('patientId');
        activitiesToDisplay = await getAssignments(getPatient);
        
        activitiesToDisplay.forEach(activity =>{
          //console.log(activity);
          // if (!activitiesToDisplay.find(({assignmentId}) => assignmentId === activity.assignmentId))
          prvsActivities.push(activity);
          
        })
        prvsActivities.sort(GetSortOrder("itemLevel"))
        setActivityDisplay(prvsActivities);
        setdoctorAssigned(true);
      } catch(error){
        console.error(error);
      }
    })();
  },[activityDisplay])
  
  const navigation = useNavigation();
  
   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])

  return (
  
    <View className=" h-full bg-white w-full">
    <Header/>

    <ScrollView contentContainerStyle={{
        padding:12,
        paddingTop:10
    }}
    vertical
    showsVerticalScrollIndicator={true}>
      {doctorAssigned? 
      <View className="ml-2">       
        <Text className='mb-2 font-interMedium text-lg'>My Assignments</Text>
          <Activities arrayOfActivities = {activityDisplay}/>
      </View> : <Text>Choose from our best doctors</Text>}
      
      <Text className='ml-2 mb-2 font-interMedium text-lg'>Blogs</Text>
      <View className="w-full">  
        <Blogs className="w-screen"/>
      </View>
      
    </ScrollView>
    </View>

    
  )
}

export default Dashboard;

