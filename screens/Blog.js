import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import MyButton from '../components/QuestionButton';
import { LinearGradient } from 'expo-linear-gradient';





const Blog = ({ route }) => {
  //console.log(route);
  const imgUrl = route.params.imgUrl;
  const author = route.params.author;
  const title = route.params.title;
  const publishedAt = route.params.publishedAt;
  const description = route.params.description
  return (
    <LinearGradient colors={['#C1D3FD', '#FCFDFF']} style={{ flex: 1 }}>
    <ScrollView
        
        vertical className=' font-interSBold ' 
        showsVerticalScrollIndicator={true}>
    <View>
      <Image className='h-60 w-auto' source={{ uri: imgUrl }} />
      
        <View className='m-4'>
          <Text className='text-xl text-colorr font-interBold'>{title} </Text>
          <View className='flex-row mt-2'>
          <Text className='font-interELight mr-4'>{author}</Text>
          <Text className='font-interELight'>{publishedAt}</Text>
          
          </View>
          <Text className='mt-4 text-colorr font-interRegular tracking-wide text-sm'>{description}</Text>
          
        </View>
      

    </View>
    </ScrollView>
    </LinearGradient>
  )
}

export default Blog