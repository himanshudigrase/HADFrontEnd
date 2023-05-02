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
import patientObj from '../services/getPatientDetails';
import messaging from '@react-native-firebase/messaging';
import { doctor } from '../dummyData/doctor';




function Dashboard({ route }){
  const { logout } = useContext(AuthContext);
  const [doctorAssignedlogin, setdoctorAssigned] = useState(false);
  const [activityDisplay, setActivityDisplay] = useState([]);
  const { doctorAssigned } = useContext(AuthContext);
  const [yetToAssign, setYetToAssign] = useState(true);
  // let activitiesToDisplay = [];
  let prvsActivities = activityDisplay;


  const [hash_completed, setHashCompleted] = useState({
    1:true,
    2:false,
    3:false,
    4:false,
    5:false,
  });

  useEffect(() => {
    async function fetchData() {

      try {

        const getPatient = await AsyncStorage.getItem('patientId');
        const getDoctorId = await AsyncStorage.getItem('doctorId');
        const fcmToken = await messaging().getToken();
        const getfcmToken = await patientObj.getToken(getPatient);

        if (getDoctorId != null && getDoctorId != undefined || doctorAssigned) { setdoctorAssigned(true) }
        if (fcmToken != getfcmToken.fcmToken) {
          const reqBody = { fcmToken: fcmToken }
          await patientObj.putToken(getPatient, reqBody);
        }

        const activitiesToDisplay = await getAssignments(getPatient);
        setActivityDisplay(activitiesToDisplay);
        console.log(activityDisplay);
        
        console.log("length = ", activityDisplay.length);
        if(activitiesToDisplay != [] && activitiesToDisplay != undefined && activitiesToDisplay != '') {
          setYetToAssign(false);
        }


        let copyAssignments = activityDisplay;
        copyAssignments.sort(GetSortOrder("itemLevel"));
        console.log("hash_completed = ",hash_completed);


        // if (activitiesToDisplay === 401) logout();

        // if (activitiesToDisplay != [] && activitiesToDisplay != undefined && activitiesToDisplay != '') {
        //   activitiesToDisplay.forEach(activity => {
        //     if (!prvsActivities.find(item => item.id == activity.id && item.itemLevel == activity.itemLevel && item.status == activity.status)) prvsActivities.push(activity);
        //   });

        //   prvsActivities.sort(GetSortOrder("itemLevel"));
        //   console.log(prvsActivities);
        //   setActivityDisplay(prvsActivities);
        //   setYetToAssign(false);
        // }

        let curAssignmentNum = 0;
        let updatedHash = JSON.parse(JSON.stringify(hash_completed));

        while(copyAssignments[curAssignmentNum].status) {
          curAssignmentNum++;
        }

        let prevAssingmentNum = curAssignmentNum - 1;
        let curItemLevel = copyAssignments[curAssignmentNum].itemLevel;
        if(copyAssignments[prevAssingmentNum].itemLevel != curItemLevel) {
          updatedHash[curItemLevel] = true; 
        }

        setHashCompleted(updatedHash);
        console.log("updatedHash : ", updatedHash);


      } catch (error) {
        console.error(error);
      }
    }
    // setLoadActivity(false);
    fetchData();
    console.log(hash_completed);
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
          {
            (doctorAssignedlogin || doctorAssigned) ? yetToAssign ?
              <View className="ml-2">
                {console.log(doctorAssigned)}
                <Text className='mb-2 font-interMedium text-lg'>My Assignments</Text>

                <YetToAssignActivityCard />
              </View>

              :
              <View className="ml-2">
                <Text className='mb-2 font-interMedium text-lg'>My Assignments</Text>
                <Activities arrayOfActivities={activityDisplay} hash_completed={hash_completed} />
              </View>
              :
              <ChooseDoctorCard />}

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
