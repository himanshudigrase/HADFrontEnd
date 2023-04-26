import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import { AuthContext } from '../context/AuthContext';
import loginService from '../services/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';


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
    try {
      const token = await loginService.loginUser(email, password);
      if(token == null || token == 'undefined') Alert.alert('Login Failed', 'Please provide correct Email and Password', [
        { text: 'OK' },
      ])
      else{
        await AsyncStorage.setItem('token', token);

        const patientId = await loginService.getID(email);
        await AsyncStorage.setItem('patientId', patientId.toString());
  
        const from_storage = await AsyncStorage.getItem('token');
  
        login(from_storage);
      }
      
    } catch (e) {
      console.error(e);
      
    }
  }

  async function handleSubmit() {
    await getToken();
  }


  return (
    <LinearGradient colors={['#C1D2FC', '#FCFDFF']} style={{ flex: 1 }}>
      <SafeAreaView className="justify-center items-center h-full">
        <Image style={styles.bgImage} source={require('../assets/images/bg2.png')} />
        <Text className="-top-48 text-textColor text-2xl font-interBold">Better U.</Text>
        <View className="mt-8 flex-column ">
          <Input  otherProps={{
            onChangeText: emailHandler.bind(email),
            placeholder: "Email ID",
          }} onChange={handleEmail} />

          <Input label="" otherProps={{
            onChangeText: passwordHandler.bind(password),
            placeholder: "Password",
            secureTextEntry: true,
          }} onChange={handlePassword} />
        </View>
        <View className='relative justify-center items-center mr-32 bottom-0 top-6'>
          <MyButton className='w-40' mode="contained" onPress={handleSubmit} title='Login'></MyButton>
          <View className='flex-row pt-2 ml-8'>
            <Text className="text-xs pl-14 ml-4 pb-2 text-textColor font-regular">Don't have an account?</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Signup')}><Text className="text-xs font-bold underline underline-offset-2 pl-1  text-textColor font-regular">Sign Up</Text></TouchableWithoutFeedback>
          </View>
        </View>

      </SafeAreaView>
    </LinearGradient >
  )
}

export default Login;

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    left: '-76%',
    right: '-20%',
    top: '16%',
    bottom: '70.72%',
    zIndex: -1,

  },
})