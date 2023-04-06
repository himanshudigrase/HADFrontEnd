import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import MoodCard from './MoodCard';
const FeaturedMood = () => {
  return (
    <View  className='flex flex-row h-full justify-center w-full flex-wrap m-2 pr-5 justify-evenly mt-20'>
        <MoodCard text = 'Happy' value='1'/>
        <MoodCard text = 'Anxious' value='2'/>
        <MoodCard text = 'Sad' value='3'/>
        <MoodCard text = 'Depressed' value='4'/>
        <MoodCard text = 'Joyful' value='5'/>
        <MoodCard text='Confused' value='6'/>
    </View>
  )
}

export default FeaturedMood