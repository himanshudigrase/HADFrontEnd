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
        
          <Card.Content className='flex'>
            <View className=''>
              <Text className=' text-colorr font-interSBold mb-8'>Congratulations !! You have been assigned a doctor. Your activities will appear here</Text>
              
            </View>
          </Card.Content>
        </View>

      </Card>
    </TouchableOpacity>
  )
}

export default  YetToAssignActivityCard;
