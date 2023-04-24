import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import Activities from '../components/Activities';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import getAssignments from '../services/assignments';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetSortOrder } from '../functions/sortFunctionActivity';
import { LinearGradient } from 'expo-linear-gradient';
import ChooseDoctorCard from '../components/ChooseDoctorCard';
import YetToAssignActivityCard from '../components/YetToAssignActivityCard';


const Dashboard = ({ route }) => {
  const { name } = useContext(AuthContext);
  //const [doctorAssigned, setdoctorAssigned] = useState(false);
  const [activityDisplay, setActivityDisplay] = useState([]);
  const {doctorAssigned} = useContext(AuthContext);
  const [yetToAssign, setYetToAssign] = useState(true);

  let activitiesToDisplay = [];
  let prvsActivities = activityDisplay;


  useEffect(()=>{
    async function fetchData(){
    
      try {
        const getPatient = await AsyncStorage.getItem('patientId');
        activitiesToDisplay = await getAssignments(getPatient);
        if(activitiesToDisplay !=[] && activitiesToDisplay!=undefined && activitiesToDisplay !='') {

          activitiesToDisplay.forEach(activity => {
            console.log(activity);
            //  if (activitiesToDisplay ==[] &&  !activitiesToDisplay.find(({assignmentId}) => assignmentId === activity.assignmentId))
            if (!prvsActivities.find(item => item.id === activity.id)) prvsActivities.push(activity);
  
          })
          prvsActivities.sort(GetSortOrder("itemLevel"));
          setActivityDisplay(prvsActivities);
          setYetToAssign(false)
        }

        // condition here to check whether to set doctorAssigned to true or not
        //setdoctorAssigned(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
}, [])

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });

  }, [])

  return (
    
    <LinearGradient colors={['#C1D3FD', '#FCFDFF']} style={{ flex: 1 }}>
      <SafeAreaView className=" h-full w-full">
        <Image style={styles.bgImage} source={require('../assets/images/verti.png')} />
        <Header />
        <ScrollView contentContainerStyle={{
          padding: 12,
          paddingTop: 10
        }}
          vertical
          showsVerticalScrollIndicator={true}>
          {doctorAssigned ? yetToAssign ? 
          <View className="ml-2">
          <Text className='mb-2 font-interMedium text-lg'>My Assignments</Text>
          
          <YetToAssignActivityCard/>
        </View> 
          
          :
            <View className="ml-2">
              <Text className='mb-2 font-interMedium text-lg'>My Assignments</Text>
              <Activities arrayOfActivities={activityDisplay} />
            </View> 
            : 
            <ChooseDoctorCard/> }

          <Text className='ml-2 mb-2 font-interMedium text-lg '>Blogs</Text>
          <View className="w-full">
            <Blogs className="w-screen" />
          </View>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>

  )
}

export default Dashboard;


const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    left: '-76%',
    right: '-20%',
    top: '26%',
    bottom: '70.72%',
    zIndex: 0,

  },
})
