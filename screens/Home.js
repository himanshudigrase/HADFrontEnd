import { View, Text, StyleSheet, Image,TouchableWithoutFeedback } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import MyButton from '../components/CustomButton';


const disArr = ['Get Therapy Support from Experts',
  'Meet Daily Mental health Goals',
  'Get a Personalised Dashboard'

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
    <LinearGradient colors={['#9FB9F9', '#FCFDFF']} style={{ flex: 1 }}>
      <SafeAreaView className="h-full" style={{ zIndex: 4 }}>
        <Image style={styles.bgImage} source={require('../assets/images/bg.png')} />
        <View className="fixed pt-20 pb-5 mt-20 ml-6 z-2" style={{ zIndex: 3 }}>
          <Image className='' style={styles.logo} source={require('../assets/images/logo.png')} />
          {/* <Text className="text-3xl pb-1 text-textColor font-interSBold tracking-wide" style={styles.titleText}>better U.</Text> */}

          <Text style={styles.typoText} className=" font-interELight">{disArr[index % disArr.length]}</Text>
        </View>
        <View className='relative top-80 pt-20'>
          <MyButton className='left-20 w-40' mode="contained" onPress={() => navigation.navigate('TandC')} title='Sign Up'>Sign Up</MyButton>
          <View className='flex-row pt-2 ml-4'>
            <Text className="text-xs pl-14 ml-4  pb-2 text-textColor font-regular">Already have an account?</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}><Text className="text-xs font-bold underline underline-offset-2 pl-1  text-textColor font-regular">Login</Text></TouchableWithoutFeedback>
          </View>
        </View>

      </SafeAreaView>
    </LinearGradient>

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
  splash: {
    boxsizing: 'border-box',
    position: 'relative',
    width: '430px',
    height: '932px',
    border: '1px solid #000000',
  },
  bgImage: {
    position: 'absolute',
    left: '-11.77%',
    right: '-10%',
    top: '-0%',
    bottom: '70.72%',
    zIndex: 2
  }, logo: {
    position: 'absolute',
    width: 126,
    height: 158,
    left: 90,
    top: 0,
    zIndex: 3
  }, textM: {

  },
  typoText: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 26,
    lineHeight: 42,
    position: 'absolute',
    left: 50,
    right: 23,
    top: 260.21,


  }
})


