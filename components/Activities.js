import {ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ActivityCard from './ActivityCard'


const Activity = (arrayOfActivities) => {
 
  
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
        arrayOfActivities.arrayOfActivities.map((activity) =>{
          return(
           
            <ActivityCard
            assignmentId = {activity.assignmentId}
            key ={activity.id}
            activityId = {activity.id}
            type = {activity.type}
            name = {activity.name}
            description = {activity.description}
            itemLevel = {activity.itemLevel}
            mode = {activity.itemLevel == 1 ? 'elevated':'contained'}
            />
          )
        })
      } 
    </ScrollView>
  )
}

export default Activity