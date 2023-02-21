import { View, Text, Button, StyleSheet} from 'react-native'
import React,{useLayoutEffect,useState,useEffect} from 'react'
import { NativeWindStyleSheet } from "nativewind";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'

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
    // Below code is to display each element of array after 2 secs
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const tick = () => setIndex(i => i + 1);
  
      const id = setInterval(tick, 5000);
      return () => clearInterval(id);
    }, []);


  return (
      <SafeAreaView className="bg-backgr h-full">
        
        <View className="pt-20 pb-5 mt-40 ml-10 font-inter"> 
          <Text className=" text-3xl pb-1  text-textColor font-interSBold" style={styles.titleText}>Better U</Text>
          <Text className="text-xl  text-textColor font-regular">Time to let go of your worries DEAR!</Text>
          <Text className="text-xl font-bold text-textColor">{disArr[index%disArr.length]}</Text>
        </View>
        <View className="mx-14 px-14 rounded-full" >
        <Button className='mx-5 rounded' title='Proceed'color="#1d253b" onPress={()=>navigation.navigate('Signup')} />
        </View>
          <Text className="text-xl pl-14 ml-7 pt-12 mt-14 pb-2 text-textColor font-regular">Already have an account?</Text>
          <View className="mx-14 px-14 " >
          <Button title='Login' color="#1d253b" onPress={()=>{navigation.navigate('Login')}}/>
  
          </View>
          
        
      </SafeAreaView>
  
  )
}


export default Home;

const styles= StyleSheet.create({
  titleText:{
    fontFamily:'inter-bold'
  },
  text:{
    fontFamily:'inter-regular'
  },
  btn:{

  }
})


