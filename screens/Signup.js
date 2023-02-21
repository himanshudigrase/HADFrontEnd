import { View, Text, Button, TextInput } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Signup = () => {
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('')
  const[confirmPassword,setConfirmPassword]= useState('');
  const [isValid, setIsValid] = useState(false);

  const handleFNameChange = (text) => {
    setFname(text);
  };
  const handleLNameChange = (text) => {
    setLname(text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSubmit = () => {
    // Perform validation
    if (fname === '' ||lname==='' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Submit form
    setIsValid(true);

    if(isValid){
      navigation.navigate('DemoData',{
        email:email,
        password:password,
        confirmPassword:confirmPassword
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
  
    //const redirect =()=>

  return (
    <SafeAreaView className="flex justify-center items-center bg-backgr h-full ">
      <View> 
       <TextInput placeholder='First Name' title="fname" onChangeText={handleFNameChange} value={fname}/>
        <TextInput placeholder='Last Name' title="lname" onChangeText={handleLNameChange} value={lname}/>
        <TextInput placeholder='Username/Email' title="Username" onChangeText={handleEmailChange} value={email}/>
        <TextInput placeholder='Password' title="password" onChangeText={handlePasswordChange} value={password}/>
        <TextInput placeholder='Confirm password' title="Confirm Password" onChangeText={handleConfirmPasswordChange} value={confirmPassword}/>
        <Button title='Continue' color="#1d253b" onPress={ handleSubmit}/>
       {/* {isValid && redirect} */}
    </View>
    </SafeAreaView>
  )
}

export default Signup;