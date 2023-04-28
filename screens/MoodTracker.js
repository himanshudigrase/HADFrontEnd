import { View, Text,ScrollView,SafeAreaView,Image,StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import FeaturedMood from '../components/FeaturedMood'



const MoodTracker = () => {
  return (
    <LinearGradient colors={['#C1D3FD', '#FCFDFF']} style={{ flex: 1 }}>
    <View  className="top-12 items-center h-full w-full">
    <Image style={styles.bgImage} source={require('../assets/images/bg2.png')} />
    <Text className=" text-white text-2xl mb-10 font-interBold">Better U.</Text>
        
          <Text className='pl-12 pr-4 mb-8 font-interLight text-white text-4xl ml-2'>How's Your Mood Today? </Text>
    
    <ScrollView contentContainerStyle={{
            padding: 15,
            paddingTop: 10,
           paddingBottom:40,
           paddingRight:140,
           paddingLeft:100
          }}>
    <View className="w-full">  
        <FeaturedMood className="w-screen"/>
      </View>
    </ScrollView>
    </View>
    </LinearGradient>
  )
}

export default MoodTracker


const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    left: '-76%',
    right: '-20%',
    top: '-86%',
    bottom: '70.72%',
    zIndex: 0,

  },
})






