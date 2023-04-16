import { View, TouchableOpacity, Text,Alert } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const ActivityCard = ({ activityId,type, description, name, itemLevel, mode }) => {
//console.log("key"+activityId);
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="mr-3 mb-3" >

      <Card className=' border border-black-600 shadow-none bg-white' mode={mode} style={{
        height: 180,

        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width / 2
      }} onPress={() => {
        mode === 'contained' ?
          Alert.alert('Disabled', 'Please complete previous level of this activity', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]) :
          navigation.navigate('Activity', {
            activityId: activityId,
            name: name,
            description: description,
            type: type,
            itemLevel: itemLevel
          });

      }}>
        <View className='pt-2 flex items-start'>
          <Text className=' h-8 text-textColor text-base font-interSBold pl-4' >{name}</Text>
          <Card.Content className=''>
            <Text className=' text-textColor font-interRegular pb-3'>{description}</Text>
          </Card.Content>
          <Button mode='outlined' textColor='black' className='m-1 mr-3 ml-3 rounded-md w-32 border-solid border-sky-600  '>Level: {itemLevel}</Button>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export default ActivityCard;
