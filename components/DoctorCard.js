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
    
    <Card.Title className="m-3" title={name} subtitle= {'Qualification ' + qualification} 
   style={{alignContent:'center',margin:11} } titleStyle={{color:'black', fontFamily:'inter-bold'}}
     right={(props) =>
      <Avatar.Image className="" size={70} source={require('../assets/images/user2.png')} style={{}} /> }>
    </Card.Title>
    
    <Card.Content className="ml-2">
      <Text >Experience: {experience} yrs</Text>
      <Text >Specialization: {specialization}</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Chat</Button>
    </Card.Actions>
  </Card>

    </TouchableOpacity>
  )
}

export default DoctorCard