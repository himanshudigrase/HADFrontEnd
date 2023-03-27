import { View,  TouchableOpacity,Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';

const BlogCard = ({title,imgUrl,information}) => {
  return (
    <TouchableOpacity className=" m-2">
   <Card color='black'>
    
    <Card.Title title={title} 
     style={{alignContent:'center'}}>
    </Card.Title>
    {/* <Card.Cover source={{ uri: imgUrl }} /> */}
    <Card.Content color='red'>
      <Text className="text-red">{information}</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Read More</Button>
    </Card.Actions>
  </Card></TouchableOpacity>
  )
}

export default BlogCard;