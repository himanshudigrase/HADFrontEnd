import { View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import DoctorCard from './DoctorCard';
import doctorObj from '../services/doctors';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

const doctorData = require('../dummyData/doctor')

const FeaturedDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorLoading,setdoctorLoading] = useState(true);
  const {logout} = useContext(AuthContext);
  
  useEffect(() => {
    //async function to load data from api    --> uncomment this
    (async function fetchDoctors(){
      try{
        let doctors = await doctorObj.getDoctors();
        
        if(!doctors) logout();
        else{
          setDoctors(doctors);
          setdoctorLoading(false);
        }
        
      }catch(e){
        console.log(e);
        logout();
      }
    })();
   // let doctors = doctorData.doctor; // to load data from dummy
   
  }, []);
  return (
    doctorLoading?<ActivityIndicator size={'large'} color='blue'/>:
    <View>

      {

        doctors.map((doctor) => {
          return (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              fname={doctor.fname}
              lname={doctor.lname}
              qualification={doctor.qualification}
              experience={doctor.experience}
              imgUrl={doctor.image}
              specialization={doctor.specialization}
            />
          )
        })
      }

    </View>
  )
}

export default FeaturedDoctor