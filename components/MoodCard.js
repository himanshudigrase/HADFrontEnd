import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postMood} from '../services/mood';


const MoodCard = ({text,value}) => {
 let dataToSend = {};
 var today = new Date();
 dataToSend["mood_value"] = value;

    async function postMood(){
        const patientId = await AsyncStorage.getItem('patientId');
        dataToSend["date"] = today.toString();
        console.log(dataToSend);
        //await postMood(patientId,dataToSend);
    }



  return (
    <View className=' mr-2 '>
        <TouchableOpacity onPress={()=>postMood()}>
        <Card className='w-36 mb-3 mt-3 h-18 bg-backgr'>
        <Card.Content>
            <Text className=' justify-center items-center pr-8 text-colorr font-interBold'>{text}</Text>
        </Card.Content>
      </Card>
        </TouchableOpacity>
  
    </View>
  )
}

export default MoodCard