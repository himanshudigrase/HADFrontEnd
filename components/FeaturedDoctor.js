import { View, Text, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
//import { ArDoctorRightIcon } from 'react-native-heroicons/outline'
import DoctorCard from './DoctorCard'
// import {doctorData} from '../dummyData/doctor'
const doctorData = require('../dummyData/doctor')
//console.log(doctorData.doctor);
const FeaturedDoctor = () => {
    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        let doctors = doctorData.doctor;
        setDoctors(doctors);
    },[]);
  return (
    <View>
            
        {        
            
            doctors.map((doctor,key) => {
              //  console.log(doctor)
                return(
                <DoctorCard 
                key = {doctor.id}
                name = {doctor.name}
                qualification = {doctor.qualification}
                experience = {doctor.experience}
                imgUrl= {doctor.image}
                specialization = {doctor.specialization}
                />
                )
            })
        }
    
    </View>
  )
}

export default FeaturedDoctor