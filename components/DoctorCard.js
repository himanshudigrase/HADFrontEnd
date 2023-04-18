import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Card, Button, Avatar } from 'react-native-paper';
import MyButton from '../components/DoctorBookButton';



const DoctorCard = ({
  id, name, qualification, specialization, experience, imgUrl
}) => {
  return (
    <TouchableOpacity className="m-2">
      <Card className=" h-41 bg-white">
        <View className='mt-3 flex-row'>
          <Avatar.Image className="mt-5 ml-5" size={70} source={require('../assets/images/user2.png')} />

          <Card.Content className="ml-2">
            <Text className='font-interBold mb-2'>{name}</Text>
            <Text className='font-interRegular'>Qualification: {qualification}</Text>
            <Text className='font-interRegular'>Experience : {experience} yrs</Text>
            <Text className='font-interRegular'>Specialization : {specialization}</Text>
            <Card.Actions className='mb-2'>
              <MyButton className='mr-3 ' mode='contained' title='Book'>Book</MyButton>
            </Card.Actions>
          </Card.Content>
        </View>


      </Card>

    </TouchableOpacity>
  )
}

export default DoctorCard