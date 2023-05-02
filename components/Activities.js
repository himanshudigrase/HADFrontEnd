import {ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ActivityCard from './ActivityCard'


function Activity({arrayOfActivities, hash_completed}){

  // console.log("completed hash = ",hash_completed);
  
  // let completed = [true,false,false,false,false];


  // const prvsComplete = (level) =>{
  // let flag = false;
    
  //   arrayOfActivities.arrayOfActivities.find(activity =>{
      
  //     if(activity.itemLevel == level-1 && activity.status == false){
  //       console.log(activity.itemLevel, activity.status );
  //       flag = true;
  //     } 
     
      
  //   });
  //   if(!flag)completed[level-1] = true;
  //   flag = false;
   
  // }
  
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
        arrayOfActivities.map((activity) =>{
      
          // if(activity.itemLevel!=1){prvsComplete(activity.itemLevel);
          // console.log( activity.itemLevel + " "+completed[activity.itemLevel-1]);
          // }
          
          return(    
            <ActivityCard
            assignmentId = {activity.assignmentId}
            key ={activity.assignmentId}
            activityId = {activity.id}
            type = {activity.type}
            name = {activity.name}
            description = {activity.description}
            itemLevel = {activity.itemLevel}
            mode = { hash_completed[activity.itemLevel] == true ? 'elevated':'contained'}
            
            />
          )
        })
      } 
    </ScrollView>
  )
}

export default Activity