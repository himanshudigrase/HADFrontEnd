import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import FeaturedMF from '../components/FeaturedMF'
import Header from '../components/Header'
const MFList = () => {
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
          <Text>Let's Bust out some popular Myths</Text>
          <FeaturedMF />
        </View>    
      </ScrollView>
      </View>
    )
  }
  
  export default MFList;