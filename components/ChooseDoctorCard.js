import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DoctorBookButton from './DoctorBookButton.js';
const ChooseDoctorCard = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity className=" m-2" onPress={() => {
      navigation.navigate('Experts')
    }}>
      <Card className=' pt-6 pl-3 flex-row h-40 bg-white  shadow-none' >
        <View className='flex-row'>
        <Card.Cover  className='mt-3 flex h-20 w-1/4' source={require('../assets/images/user2.png')} />
          <Card.Content className='flex w-3/4'>
            <View className=''>
              <Text className=' text-colorr font-interSBold mb-8'>Choose from our best Experts.</Text>
              <DoctorBookButton className='mt-4' title='Chat Now'/>
            </View>
          </Card.Content>
        </View>

      </Card>
    </TouchableOpacity>
  )
}

export default  ChooseDoctorCard;