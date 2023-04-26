import { View, Text,ScrollView,StyleSheet,Image ,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import FeaturedDoctor from '../components/FeaturedDoctor'
import { LinearGradient } from 'expo-linear-gradient';



const DoctorList = () => {
  
  return (
    <LinearGradient colors={['#C1D3FD', '#FCFDFF']} style={{ flex: 1 }}>
    <View className=" h-full ">
    <Image style={styles.bgImage} source={require('../assets/images/verti.png')} />
    <Header/>
    <ScrollView contentContainerStyle={{
        padding:15,
        paddingTop:10
    }}
    vertical
    showsVerticalScrollIndicator={true}>
      <View className="">
        <Text className='ml-2 mb-2 font-interMedium text-lg '>Chooose from our best Doctors</Text>
        <FeaturedDoctor />
      </View>    
    </ScrollView>
    </View>
    </LinearGradient>
  )
}

export default DoctorList



const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    left: '-76%',
    right: '-20%',
    top: '26%',
    bottom: '70.72%',
    zIndex: 0,

  },
})