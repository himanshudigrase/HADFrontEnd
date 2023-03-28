import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import FeaturedDoctor from '../components/FeaturedDoctor'


const DoctorList = () => {
  return (
    <View className=" bg-backgr h-full ">
    <Header/>
    <ScrollView contentContainerStyle={{
        padding:15,
        paddingTop:10
    }}
    vertical
    showsVerticalScrollIndicator={true}>
      <View className="">
        <Text>Chooose from our best Doctors</Text>
        <FeaturedDoctor />
      </View>    
    </ScrollView>
    </View>
  )
}

export default DoctorList