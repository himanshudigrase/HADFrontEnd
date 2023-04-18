import { View, Text, Image, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react';
import MoodCard from './MoodCard';
import { ActivityIndicator } from 'react-native-paper'
const moodData = require('../dummyData/moods')



const FeaturedMood = () => {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    let moods = moodData.moods;
    setMoods(moods);
  })
  return (
    loading ?
    <View className="">
      {
        moods.map((mood) => {
          return (
            <MoodCard
              key={mood.id}
              value={mood.id}
              imgUrl={mood.image}
              mood = {mood.mood}
            />
          )
        })
      }
    </View>: <ActivityIndicator size={'large'} color='orange' />

  )
}

export default FeaturedMood