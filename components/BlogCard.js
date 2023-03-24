import { View,  TouchableOpacity,Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';

const BlogCard = ({name,imgUrl,designation}) => {
  return (
    <TouchableOpacity className="flex-row m-2">
   <Card>
    
    <Card.Title title={name} 
    subtitle={designation} style={{alignContent:'center'}} titleStyle={{color:'rgba(255,255,255,0.9)'}}
     left={(props) =>
      <Avatar.Icon size={50} icon="folder" color='rgba(255,255,255,0.9)' /> }>
    </Card.Title>
    
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Chat</Button>
    </Card.Actions>
  </Card></TouchableOpacity>
  )
}

export default BlogCard;