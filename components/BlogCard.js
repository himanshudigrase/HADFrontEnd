import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const BlogCard = ({ author, title, imgUrl, information, description }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity className=" m-1" onPress={() => {
      navigation.navigate('Blogs', {
        
          title:title, 
          imgUrl:imgUrl,
          description:description,
          author:author, 
          information:information
        
        
      })
    }}>
      <Card className='pt-2 pl-2 flex-row h-36' >
      <View className='flex-row'>
      <Card.Cover className='flex h-28 w-1/4' source={{ uri: imgUrl }} />
      <Card.Content className='flex w-3/4'>
        
        <View className=''>
          <Text className=' text-textColor font-interSBold'>{title.substring(0,100)}</Text>
          <Text >{author}</Text>           
          {/* <Text className="text-red">{information}</Text> */}           
        </View>
      </Card.Content>
      </View>
      
      </Card>
    </TouchableOpacity>
  )
}

export default BlogCard;