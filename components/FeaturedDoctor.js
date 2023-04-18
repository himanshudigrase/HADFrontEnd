import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import DoctorCard from './DoctorCard';


const doctorData = require('../dummyData/doctor')

const FeaturedDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    let doctors = doctorData.doctor;
    setDoctors(doctors);
  }, []);
  return (
    <View>

      {

        doctors.map((doctor, key) => {
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