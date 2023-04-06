import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FeaturedMood from '../components/FeaturedMood'
import Header from '../components/Header'
const MoodTracker = () => {
    return (
      <View className='bg-white h-full' >
      <Header/>
      <ScrollView contentContainerStyle={{
          padding:15,
          paddingTop:10
      }}
      vertical
      showsVerticalScrollIndicator={true}>
        <View className="">
          <Text className='font-interBold text-blue text-lg ml-2'>How's your mood today? </Text>
          <FeaturedMood />
         
        </View>    
      </ScrollView>
      </View>
    )
  }
  

export default MoodTracker