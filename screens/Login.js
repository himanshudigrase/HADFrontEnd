import { View, Text, Button, TextInput } from 'react-native'
import React,{useContext, useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import  {AuthContext}  from '../context/AuthContext';

const Login = () => {
   const {test} = useContext(AuthContext);
  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])
  
  return (
    <SafeAreaView className="justify-center items-center bg-backgr h-full ">
      
        <Text className="text-textColor text-2xl font-interSBold">Sign In using your email</Text>
        <View className="flex mt-4">
        <Input className="mt-34" label="" otherProps={{
          placeholder:"Enter your email"
        }}/>
        
        
        <Input label="" otherProps={{
          placeholder:"Enter your Password"
        }}/>
        </View>
        
        <Button title='Continue' color="#1d253b" onPress={()=>
          navigation.navigate('AppStack',{screen:'Dashboard'})
          
          }/>
        
  
    </SafeAreaView>
  )
}

export default Login;