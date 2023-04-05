import { View, Text, Button, TextInput } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import { AuthContext } from '../context/AuthContext';
import loginService from '../services/login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('cxzc');
  const [password, setPassword] = useState('cxz');
  const navigation = useNavigation();

  const handleEmail = (text) => {
    setEmail(text)
  }

  const handlePassword = (text) => {
    setPassword(text)
  }

  function emailHandler(enteredValue) {
    setEmail(enteredValue);
  }
  function passwordHandler(enteredValue) {
    setPassword(enteredValue);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });

  }, [])

  async function getToken() {
    const token = await loginService.loginUser(email, password);
    console.log('getting token from backend'+token);
    await AsyncStorage.setItem('token', token);
  }
  async function getPid() {
    const patientId = await loginService.getID(email);
    AsyncStorage.setItem('patientId', patientId.toString());
  }

  async function loginToAuth(token) {
    console.log('coming to here');
    const from_storage = await AsyncStorage.getItem('token');
    console.log('saved token ' + from_storage)
    login(from_storage)
  }

  async function handleSubmit() {
    let token = await getToken();
    let patientId = await getPid();
    const from_storage = await AsyncStorage.getItem('patientId');
    console.log('saved ppid ' + from_storage)
    loginToAuth(token);

  }


  return (
    <SafeAreaView className="justify-center items-center bg-backgr h-full ">

      <Text className="text-textColor text-2xl font-interSBold">Sign In using your email</Text>
      <View className="flex mt-4">
        <Input className="mt-34" label="" otherProps={{
          onChangeText: emailHandler.bind(email),
          placeholder: "Enter your email",
        }} onChange={handleEmail} />


        <Input label="" otherProps={{
          onChangeText: passwordHandler.bind(password),
          placeholder: "Enter your Password"
        }} onChange={handlePassword} />
      </View>

      <Button title='Continue' color="#1d253b" onPress={handleSubmit} />


    </SafeAreaView>
  )
}

export default Login;