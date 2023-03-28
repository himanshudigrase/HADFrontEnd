import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const BlogCard = ({ author,title, imgUrl, information ,description}) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity className=" m-2" onPress={() => {
      navigation.navigate('Blogs', {
        title, imgUrl, description,author,information
      })
    }}>
      <Card color='black'>

        <Card.Title title={title}
         subtitle={author}
          style={{ alignContent: 'center' }} titleStyle={{color:'',fontFamily:'inter-extrabold'}} subtitleStyle={{fontFamily:'inter-light'}}>
        </Card.Title>
        {/* <Card.Cover source={{ uri: imgUrl }} /> */}
        <Card.Content color='red'>
          <Text className="text-red">{information}</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Read More</Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  )
}

export default BlogCard;