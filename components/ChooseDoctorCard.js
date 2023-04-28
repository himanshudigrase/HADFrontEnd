import { View, TouchableOpacity, Text,Image } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DoctorBookButton from './DoctorBookButton.js';
import { Avatar } from 'react-native-paper';


const ChooseDoctorCard = () => {
 
  const navigation = useNavigation();

  return (
    <TouchableOpacity className=" m-2" onPress={() => {
      navigation.navigate('Experts');
    }}>
      <Card className=' pt-8 pl-3 flex-row h-52   shadow-none  justify-center' >
        <View className='flex-column mt-4'>
        {/* <Card.Cover  className='mt-3 flex h-20 w-1/4' source={require('../assets/images/user2.png')} /> */}
        <View className='flex-row items-center justify-center -mt-8'>
        <Image className="h-16 w-16 rounded-full z-1 " source={require('../assets/images/doctor.png')} />
        <Image className="fixed h-20 w-20 rounded-full z-2" source={require('../assets/images/doctor.png')} />
        <Image className="h-16 w-16 rounded-full z-1" source={require('../assets/images/doctor.png')} />
        </View>
          <Card.Content className='flex '>
            <View className='flex justify-center items-center'>
              <Text className=' text-colorr font-interSBold my-2 mt-4'>Choose from our best Experts.</Text>
              <DoctorBookButton className='' title='Choose Now'/>
            </View>
          </Card.Content>
        </View>

      </Card>
    </TouchableOpacity>
  )
}

export default  ChooseDoctorCard;