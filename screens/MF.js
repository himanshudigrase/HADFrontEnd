import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FeaturedMF from '../components/FeaturedMF'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient';


const MFList = () => {
  return (
    <LinearGradient colors={['#C1D3FD', '#FCFDFF']} style={{ flex: 1 }}>
      <View className=" h-full ">
        <Header />
        <ScrollView contentContainerStyle={{
          padding: 15,
          paddingTop: 10
        }}
          vertical
          showsVerticalScrollIndicator={true}>
          <View className="">
            <Text className='font-interMedium  text-lg ml-2'>Let's Bust out some popular Myths</Text>
            <FeaturedMF />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  )
}

export default MFList;