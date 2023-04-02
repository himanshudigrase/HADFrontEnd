import {ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ActivityCard from './ActivityCard'
import activities from '../services/activity';
const assgnDummy  = require('../dummyData/assignment');
const activityData = require('../dummyData/activity');

const Activity = (arrayOfActivities) => {
  console.log(arrayOfActivities);
   const [activities,setActivity] = useState([]);
   const [afterUseEffect,setAfterUseEffect] = useState(false);

    // API call to get assignments of patients only if they are assigned to any doctor
    //let assgns = await activities.getActivities(userId);         //// ---> uncomment this while integration
    
  
  
   useEffect(()=>{

    let activities = activityData.activity;
    setActivity(activities);
   })
   
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
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