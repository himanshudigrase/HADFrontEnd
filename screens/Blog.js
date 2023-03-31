import { View, Text,Image } from 'react-native'
import React from 'react'

const Blog = ({route}) => {
  console.log(route);
  const imgUrl = route.params.imgUrl;
  const author = route.params.author;
  const title = route.params.title ;
  const information = route.params.information;
  const description = route.params.description
  return (
    <View>
      <Image className='h-60 w-auto' source={{uri: imgUrl}}  />
      <View className='m-3 font-interSBold'>
      <Text className='text-xl text-textColor font-interBold'>{title} </Text>
      <Text className='font-interELight'>{author}</Text>
      <Text className='mt-4 font-interRegular'>{description}</Text>
      <Text className='font-interRegular'>{information}</Text>
      </View>
     
    </View>
  )
}

export default Blog