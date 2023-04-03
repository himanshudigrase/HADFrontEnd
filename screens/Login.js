import { View, Text, Button, TextInput } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import { AuthContext } from '../context/AuthContext';
import loginUser from '../services/login';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email,setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigation = useNavigation();

  const handleEmail = (text) =>{
    setEmail(text)
  }

  const handlePassword = (text) =>{
    setPassword(text)
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });

  }, [])

  return (
    <SafeAreaView className="justify-center items-center bg-backgr h-full ">

      <Text className="text-textColor text-2xl font-interSBold">Sign In using your email</Text>
      <View className="flex mt-4">
        <Input  className="mt-34" label="" otherProps={{
          placeholder: "Enter your email",
        }} onChange = {handleEmail} />


        <Input label="" otherProps={{
          placeholder: "Enter your Password" 
        }} onChange = {handlePassword}/>
      </View>

      <Button title='Continue' color="#1d253b" onPress={() =>
      {
        let token = loginUser(email,password);
        login('dsad')
      }
        // navigation.navigate('AppStack',{screen:'Dashboard'})
        
      } />


    </SafeAreaView>
  )
}

export default Login;