import {ScrollView } from 'react-native'
import React from 'react'
import ActivityCard from './ActivityCard'

const Activities = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      
      <ActivityCard
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />
      <ActivityCard
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />
      <ActivityCard
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />
      <ActivityCard
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />

      <ActivityCard
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />
      <ActivityCard
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />
      <ActivityCard
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />
    </ScrollView>
  )
}

export default Activities