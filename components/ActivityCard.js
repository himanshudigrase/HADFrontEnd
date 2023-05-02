import { View, TouchableOpacity, Text,Alert } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import MyButton from '../components/ActivityButton';



const ActivityCard = ({assignmentId, activityId,type, description, name, itemLevel, mode,status }) => {
console.log('AssignmentId',assignmentId);
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="mr-3 mb-3" >

      <Card className='relative  shadow-none bg-white' mode={mode} style={{
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
            assignmentId:assignmentId,
            activityId: activityId,
            name: name,
            description: description,
            type: type,
            itemLevel: itemLevel,
            status: status
          });

      }}>
        <View className=' flex items-start'>
          <Text className=' h-8 text-textColor text-base font-interSBold pl-4' >{name}</Text>
          <Card.Content className=''>
            <Text className=' text-textColor font-interRegular pb-3'>{description}</Text>
          </Card.Content>
          {/* <Button   className='m-1 mr-3 ml-3   '>Level: {itemLevel}</Button> */}         
          <MyButton  className='fixed mt-6' mode="contained" title={itemLevel}></MyButton>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export default ActivityCard;
