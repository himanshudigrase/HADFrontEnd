import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StarIcon,MapPinIcon } from 'react-native-heroicons/solid'
import { Card,Button,Avatar } from 'react-native-paper';


const DoctorCard = ({
    id,name,qualification,specialization,experience,imgUrl
}) => {
  return (
    <TouchableOpacity className="m-2"> 
      <Card className="">
    
    <Card.Title className="m-3" title={name} subtitle={qualification} 
   style={{alignContent:'center',margin:12}} 
     left={(props) =>
      <Avatar.Image className="" size={70} icon={imgUrl} /> }>
    </Card.Title>
    
    <Card.Content className="ml-8">
      <Text >{experience}</Text>
      <Text >{specialization}</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Chat</Button>
    </Card.Actions>
  </Card>

    </TouchableOpacity>
  )
}

export default DoctorCard