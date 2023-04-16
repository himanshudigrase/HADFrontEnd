import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper';

const disArr = ['Get therapy support from professionals',
  'Meet daily mental health goals',
  'Get a personalised dashboard'

]
const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => setIndex(i => i + 1);

    const id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);


  return (
    <SafeAreaView className="relative bg-backgr h-full">

      <View className="fixed pt-20 pb-5 mt-20 ml-6">
        <Text className=" text-3xl pb-1  text-textColor font-interSBold tracking-wide" style={styles.titleText}>better U.</Text>
        <Text className="text-xl  text-textColor font-regular mt-2">Time to let go of your worries DEAR!</Text>
        <Text className="text-xl font-bold text-textColor mt-1">{disArr[index % disArr.length]}</Text>
      </View>
      
        <Button className='mt-10 ml-5 rounded-md w-65 mr-4' buttonColor='#1d253b' mode="contained" onPress={() => navigation.navigate('TandC')}>Sign Up</Button>
     
      <Text className="text-xl pl-14 ml-4 pt-2 mt-14 pb-2 text-textColor font-regular">Already have an account?</Text>
      
        <Button className='ml-5 mt-8 rounded-md w-65 mr-4' mode="contained" buttonColor="#1d253b" onPress={() => { navigation.navigate('Login') }}>Login</Button>

      


    </SafeAreaView>

  )
}


export default Home;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'inter-bold'
  },
  text: {
    fontFamily: 'inter-regular'
  },
  btn: {

  }
})


