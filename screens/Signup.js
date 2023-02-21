import { View, Text, Button, TextInput } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Signup = () => {
  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])
  
  return (
    <SafeAreaView className="flex justify-center items-center bg-backgr h-full ">
      <View> 
        <TextInput placeholder='Username/Email' title="Username" />
        <TextInput placeholder='Password' title="password"/>
        <TextInput placeholder='Confirm password' title="Confirm Password"/>
        <Button title='Continue' color="#1d253b" onPress={()=>navigation.navigate('DemoData')}/>
       
    </View>
    </SafeAreaView>
  )
}

export default Signup;