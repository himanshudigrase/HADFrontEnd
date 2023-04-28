import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { ActivityIndicator, Avatar } from 'react-native-paper'
import { AuthContext } from '../context/AuthContext'
import { IconButton,Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import patientObj from '../services/getPatientDetails'                                                  
import AsyncStorage from '@react-native-async-storage/async-storage'


const CustomDrawer = (props) => {
  const [pDetails, setpDetails] = useState({});
  const { logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchUserData() {
      try {
        const getPatient = await AsyncStorage.getItem('patientId');
        const getDetails = await patientObj.getPatientDetails(getPatient);
        if (!getDetails)logout();
        else{
          setpDetails(getDetails);
          setLoading(false);
          
        }
       
      } catch (e) {
        console.log(e);
      }
    }
    fetchUserData();
  }, [])
  return (
    <LinearGradient colors={['#C1D3FD', '#FCFDFF']} style={{ flex: 1 }}>
      <View className="flex-1 ">
        {/* <Image style={styles.bgImage} source={require('../assets/images/verti.png')} /> */}
        <DrawerContentScrollView {...props}>
          {loading ? <ActivityIndicator /> :
            <View className="mt-4">
              <Avatar.Image className="mx-24" source={require('../assets/images/user2.png')} />
              <View className='flex items-center'>
                <Text className='mt-4 text-black font-interBold'>{pDetails.demographics.firstName} {pDetails.demographics.lastName}</Text>
                <Text className='mt-4 text-black font-interMedium'>{pDetails.demographics.age} years </Text>

              </View>


              <View className='flex-row items-center justify-center mt-2 mb-4'>
                <Image source={require('../assets/images/height.png')} className='h-8 w-8 ' resizeMode='contain' />
                <Text className='mt-4 text-black font-interMedium pb-4 px-2 pl-2'>{pDetails.patient.medicalHistory.height} cms</Text>
                <Image source={require('../assets/images/weight.png')} className='h-6 w-6 ' resizeMode='contain' />
                <Text className='mt-4 text-black font-interMedium pb-4 px-2'>{pDetails.patient.medicalHistory.weight} kgs</Text>

              </View>
              {/* <View className='flex-row items-center justify-center mt-2 mb-8'>
                {pDetails.patient.medicalHistory.drinksAlcohol ?
                  <Image source={require('../assets/images/drink.png')} className='h-8 w-8 mr-2' resizeMode='contain' /> :
                  <Image source={require('../assets/images/nodrink.png')} className='h-8 w-8 mr-2' resizeMode='contain' />
                }{pDetails.patient.medicalHistory.drinksAlcohol ?
                  <Image source={require('../assets/images/smoke.png')} className='h-6 w-6 ' resizeMode='contain' /> :
                  <Image source={require('../assets/images/nosmoke.png')} className='h-8 w-8 ' resizeMode='contain' />
                }

              </View> */}
            </View>
          }
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <Divider  />
        <View className='flex'>
          <TouchableOpacity onPress={() => { logout() }} className='flex-row pb-3 items-center justify-start'>
            <IconButton className='ml-3' icon='login' size={22} color='black' />
            <Text className='text-black font-interBold'>Sign out</Text>
          </TouchableOpacity>
        </View>

      </View>
    </LinearGradient>

  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    left: '-300%',
    right: '-20%',
    top: '26%',
    bottom: '10.72%',
    zIndex: 0,

  },
})