import { View, Text, ScrollView } from 'react-native'
import React from 'react'
//import { ArDoctorRightIcon } from 'react-native-heroicons/outline'
import DoctorCard from './DoctorCard'

const FeaturedDoctor = () => {
  return (
    <View>
            {/* Doctor Cards */}
            <DoctorCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
            short_description="hghkg"
            />
            <DoctorCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
            
            short_description="fs"
            />
            <DoctorCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
           
            short_description="fds"
            />
            <DoctorCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
          
            short_description="fds"
            />
            <DoctorCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
   
            short_description="fds"
            />
            <DoctorCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
         
            short_description="fds"
            />
       
    
    
    </View>
  )
}

export default FeaturedDoctor