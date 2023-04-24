import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';




const YetToAssignActivityCard = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity className=" m-2" >
      <Card className=' pt-6 pl-3 flex-row h-40 bg-white  shadow-none' >
        <View className='flex-row'>
        <Card.Cover  className='mt-3 flex h-20 w-1/4' source={require('../assets/images/user2.png')} />
          <Card.Content className='flex w-3/4'>
            <View className=''>
              <Text className=' text-colorr font-interSBold mb-8'>Please be patient, activities will appear soon.</Text>
              
            </View>
          </Card.Content>
        </View>

      </Card>
    </TouchableOpacity>
  )
}

export default  YetToAssignActivityCard;
