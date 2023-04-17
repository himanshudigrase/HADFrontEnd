import { View, Text, TextInput, Image, StyleSheet,TouchableWithoutFeedback } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import { AuthContext } from '../context/AuthContext';
import { Button } from 'react-native-paper';
import MyButton from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';

const Signup = () => {
  const { fname, lname, email } = useContext(AuthContext);
  const [isValid, setIsValid] = useState(false);
  const [inputValues, setInputValues] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const demoObj = {
    email: inputValues.email,
    password: inputValues.password,
    roleID: 3
  }
  // Generic way to handle input changes
  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue
      };
    });
  }


  const handleSubmit = () => {
    // Perform validation
    if (inputValues.fname === '' || inputValues.lname === '' || inputValues.email === '' || inputValues.password === '' || inputValues.confirmPassword === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (!validateEmail(inputValues.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (inputValues.password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (inputValues.password !== inputValues.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Submit form
    setIsValid(true);

    if (isValid) {
      // here we try yo store the data in Storage using AsyncStorage

      navigation.navigate('DemoData', {

        demodet: demoObj,
        fname: inputValues.fname,
        lname: inputValues.lname,


      }
      )
    }
  };






  const validateEmail = (email) => {
    // Email validation regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };


  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });

  }, [])


  return (
    <LinearGradient colors={['#C1D2FC', '#FCFDFF']} style={{ flex: 1 }}>
      <SafeAreaView className="flex justify-center items-center h-full">
        <Image style={styles.bgImage} source={require('../assets/images/bg2.png')} />
        <Text className="-top-32 text-textColor text-2xl font-interBold">Better U.</Text>
        <View >
          
          <Input otherProps={{
              onChangeText: inputChangedHandler.bind(this, 'fname'),
              placeholder: 'First Name',
              value: inputValues.fname,
              secureTextEntry: false,
              
            }} />

            <Input  otherProps={{
              onChangeText: inputChangedHandler.bind(this, 'lname'),
              placeholder: 'Last Name',
              secureTextEntry: false,
              value: inputValues.lname,
              
            }} />
          
            
        


          <Input otherProps={{
            onChangeText: inputChangedHandler.bind(this, 'email'),
            placeholder: 'abc@gmail.com',
            value: inputValues.email,
            secureTextEntry: false
          }} />

          <Input otherProps={{
            onChangeText: inputChangedHandler.bind(this, 'password'),
            placeholder: 'Password',
            value: inputValues.password,
            secureTextEntry: true
          }} />

          <Input otherProps={{
            onChangeText: inputChangedHandler.bind(this, 'confirmPassword'),
            placeholder: 'Confirm Password',
            value: inputValues.confirmPassword,
            secureTextEntry: true
          }} />


          <MyButton className='w-40 mt-6' mode="contained" onPress={handleSubmit} title='Continue'></MyButton>
          <View className='flex-row pt-2 ml-4'>
            <Text className="text-xs pl-14 ml-4  pb-2 text-textColor font-regular">Already have an account?</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}><Text className="text-xs font-bold underline underline-offset-2 pl-1  text-textColor font-regular">Login</Text></TouchableWithoutFeedback>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Signup;

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    left: '-76%',
    right: '-20%',
    top: '16%',
    bottom: '70.72%',
    zIndex: -1,

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:220
  },
})