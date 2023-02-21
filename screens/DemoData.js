import { View, Text, Button, TextInput } from 'react-native'
import React,{useLayoutEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DemoData = ({route}) => {
    const [name,setName] = useState('Enter your name');
    const [age,setAge] = useState('Enter your age here');
    const [gender,setGender] = useState('Male/Female/Others')
    {console.log(route)}
  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])
  
  return (
    
    <SafeAreaView className="flex justify-center items-center bg-backgr h-full ">
     
      <View> 
        <Text>Let's know more about you!</Text>
      <TextInput title="Username" onChangeText={(name) =>setName(name)}
            placeholder="Enter you name"
        />
        <TextInput  title="Age" onChangeText={(age) =>setAge(age)}
            placeholder="Enter you Age"/>
        <TextInput title="Gender" onChangeText={(gender) =>setGender(gender)}
            placeholder="Enter you gender"/>
        <Button title='Continue' color="#1d253b" onPress={()=>navigation.navigate('MedHistory',{
            name:name,
            age:age,
            gender:gender
        })}/>
    </View>
    </SafeAreaView>
  )
}

export default DemoData;