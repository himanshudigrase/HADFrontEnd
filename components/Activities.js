import {ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ActivityCard from './ActivityCard'
const assgnDummy  = require('../dummyData/assignment');
const activityData = require('../dummyData/activity');

const Activity = (arrayOfActivities) => {
  console.log(arrayOfActivities);
   const [activities,setActivity] = useState([]);
  
   useEffect(()=>{
    let activities = activityData.activity;
    setActivity(activities);
   })
   
  return (
    <ScrollView 
    contentContainerStyle={{
        marginRight:4,
        paddingTop:10,
        
        
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {
        arrayOfActivities.arrayOfActivities.map((activity,key) =>{
          return(
           
            <ActivityCard
            key={activity.id}
            type = {activity.type}
            name = {activity.name}
            description = {activity.description}
            itemLevel = {activity.itemLevel}
            mode = {activity.itemLevel == 1 ? 'elevated': 'contained'}
            />
          )
        })
      } 
    </ScrollView>
  )
}

export default Activity