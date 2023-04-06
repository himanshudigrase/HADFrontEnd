import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Card, Button, Avatar } from 'react-native-paper';


const DoctorCard = ({
  id, name, qualification, specialization, experience, imgUrl
}) => {
  return (
    <TouchableOpacity className="m-2">
      <Card className="">

        <Card.Title className="m-2" title={name} subtitle={'Qualification : ' + qualification}
          style={{ alignContent: 'center', margin: 11 }} titleStyle={{ color: 'black', fontFamily: 'inter-bold' }}
          subtitleStyle={{ fontFamily: 'inter-regular' }}
          right={() =>
            <Avatar.Image className="" size={70} source={require('../assets/images/user2.png')}/>}>
        </Card.Title>

        <Card.Content className="ml-2">
          <Text className='font-interRegular'>Experience : {experience} yrs</Text>
          <Text className='font-interRegular'>Specialization : {specialization}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode='contained'>Book</Button>
        </Card.Actions>
      </Card>

    </TouchableOpacity>
  )
}

export default DoctorCard