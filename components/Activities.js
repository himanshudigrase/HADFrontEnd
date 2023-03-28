import {ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AssignmentCard from './AssignmentCard'
const assignmentData = require('../dummyData/assignment');

const Assignments = () => {
   const [assignments,setAssignments] = useState([]);


   useEffect(()=>{
    let assignments = assignmentData.assignment;
    setAssignments(assignments);
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
        assignments.map((assignment,key) =>{
          return(
            <AssignmentCard
            key={assignment.id}
            id = {assignment.id}
            title = {assignment.title}
            information = {assignment.information}
            imgUrl = {assignment.imgUrl}
            />
          )
        })
      }

     
    </ScrollView>
  )
}

export default Assignments