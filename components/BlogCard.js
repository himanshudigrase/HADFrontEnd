import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const BlogCard = ({ publishedAt, author, title, imgUrl, information, description }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity className=" m-2" onPress={() => {
      navigation.navigate('Blogs', {

        title: title,
        imgUrl: imgUrl,
        description: description,
        author: author,
        information: information,
        publishedAt: publishedAt


      })
    }}>
      <Card className=' pt-3 pl-3 flex-row h-36 bg-white border border-black-600 shadow-none' >
        <View className='flex-row'>
          <Card.Cover className='mt-3 flex h-20 w-1/4' source={{ uri: imgUrl }} />
          <Card.Content className='flex w-3/4'>

            <View className=''>
              <Text className=' text-colorr font-interSBold'>{title.substring(0, 100)}</Text>
              <Text className='mt-2 text-colorr'>{author}</Text>
              <Text className="text-colorr mt-2">{publishedAt}</Text>
            </View>
          </Card.Content>
        </View>

      </Card>
    </TouchableOpacity>
  )
}

export default BlogCard;