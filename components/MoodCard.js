import { View, Text, TouchableOpacity, Alert,Image } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import postMoodService from '../services/mood';
import MyButton from './MoodButton';


const MoodCard = ({  value,imgUrl,mood }) => {
  let dataToSend = {};
  var today = new Date();
  dataToSend["moodValue"] = value;

  async function postMood() {
    const patientId = await AsyncStorage.getItem('patientId');
    dataToSend["timeStamp"] = today.toString();
    console.log();
    dataToSend["patientId"] = patientId;
    const res = await postMoodService(dataToSend).then(()=> {
      Alert.alert('Great', 'You have successfully recorded your mood for today', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ])
    }).catch((e)=>console.error(e)); 
  }



  return (
    <View className=' mr-2 mb-10'>
      <Image className='h-40 w-40' source={imgUrl}/>
      {/* <TouchableOpacity onPress={() => postMood()}>
        <Card className='w-36 mb-3 mt-3 h-18 bg-backgr'>
          <Card.Content>
            <Text className=' justify-center items-center pr-8 text-colorr font-interBold'>{mood}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity> */}
      <MyButton onPress={() => postMood()} title={mood}></MyButton>
    </View>
  )
}

export default MoodCard