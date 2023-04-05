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

      <Card className=' shadow-none bg-backgr' mode={mode} style={{
        height: 180,

        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
          <Text className=' h-16 text-textColor text-base font-interSBold pl-4' >{name}</Text>
          <Card.Content className=''>
            <Text className=' text-textColor font-interRegular '>{description}</Text>
          </Card.Content>
          <Button mode='contained-tonal' className='m-2 mr-6 ml-6'>Level: {itemLevel}</Button>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export default ActivityCard;
