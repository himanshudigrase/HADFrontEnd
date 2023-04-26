import { View, Text, Image, TouchableOpacity } from 'react-native'
import React,{useState,useEffect, useContext} from 'react';
import MoodCard from './MoodCard';
import { ActivityIndicator } from 'react-native-paper'
import { AuthContext } from '../context/AuthContext';
const moodData = require('../dummyData/moods')



const FeaturedMood = () => {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const {logout} = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    let moods = moodData.moods;
    if(moods == 401)logout();
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