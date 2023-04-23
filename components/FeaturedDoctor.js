import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import DoctorCard from './DoctorCard';
import doctorObj from '../services/doctors';

const doctorData = require('../dummyData/doctor')

const FeaturedDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    //async function to load data from api    --> uncomment this
    (async function fetchDoctors(){
      try{
        let doctors = await doctorObj.getDoctors();
        setDoctors(doctors);
      }catch(e){
        console.log(e);
      }
    })();
   // let doctors = doctorData.doctor; // to load data from dummy
   
  }, []);
  return (
    <View>

      {

        doctors.map((doctor) => {
          return (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
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