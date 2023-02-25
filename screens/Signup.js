import { View, Text, Button, TextInput } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';

const Signup = () => {
  // const [fname,setFname] = useState('');
  // const [lname,setLname] = useState('');
  // const[email,setEmail] = useState('');
  // const[password,setPassword] = useState('')
  // const[confirmPassword,setConfirmPassword]= useState('');
   const [isValid, setIsValid] = useState(false);


  const [inputValues, setInputValues] = useState({
    fname:'',
    lname:'',
    email:'',
    password:'',
    confirmPassword:'',
  })

  const demoObj = {
    email:inputValues.email,
    password:inputValues.password,
    roleID:3
  }
  // Generic way to handle input changes
  function inputChangedHandler(inputIdentifier,enteredValue){
    setInputValues((curInputValues)=>{
      return {
        ...curInputValues,
        [inputIdentifier]:enteredValue
      };
    });
  }
  // const handleFNameChange = (text) => {
  //   setFname(text);
  // };
  // const handleLNameChange = (text) => {
  //   setLname(text);
  // };
  // const handleEmailChange = (text) => {
  //   setEmail(text);
  // };

  // const handlePasswordChange = (text) => {
  //   setPassword(text);
  // };

  // const handleConfirmPasswordChange = (text) => {
  //   setConfirmPassword(text);
  // };

  const handleSubmit = () => {
    // Perform validation
    if (inputValues.fname === '' ||inputValues.lname==='' || inputValues.email === '' || inputValues.password === '' || inputValues.confirmPassword === '') {
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

    if(isValid){ 
      navigation.navigate('DemoData',{
        demodet:demoObj,
        fname:inputValues.fname,
        lname:inputValues.lname,
        // email:inputValues.email,
        // password:inputValues.password,
        // confirmPassword:inputValues.confirmPassword,
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
        <Input label="First Name" otherProps={{
          onChangeText:inputChangedHandler.bind(this,'fname') ,
          placeholder:'First Name',
          value:inputValues.fname
        }}/> 
       {/* <TextInput placeholder='First Name' title="fname" onChangeText={handleFNameChange} value={fname}/> */}
       <Input label="Last Name" otherProps={{
          onChangeText:inputChangedHandler.bind(this,'lname') ,
          placeholder:'Last Name',
          value:inputValues.lname
        }}/> 
        {/* <TextInput placeholder='Last Name' title="lname" onChangeText={handleLNameChange} value={lname}/>*/}
         <Input label="Email ID" otherProps={{
          onChangeText:inputChangedHandler.bind(this,'email') ,
          placeholder:'abc@gmail.com',
          value:inputValues.email
        }}/> 
        {/* <TextInput placeholder='Username/Email' title="Username" onChangeText={handleEmailChange} value={email}/>  */}
        <Input label="Password" otherProps={{
          onChangeText:inputChangedHandler.bind(this,'password') ,
          placeholder:'Password',
          value:inputValues.password
        }}/> 
        {/* <TextInput placeholder='Password' title="password" onChangeText={handlePasswordChange} value={password}/> */}
        <Input label="Confirm Password" otherProps={{
          onChangeText:inputChangedHandler.bind(this,'confirmPassword') ,
          placeholder:'Confirm Password',
          value:inputValues.confirmPassword
        }}/> 
        {/* <TextInput placeholder='Confirm password' title="Confirm Password" onChangeText={handleConfirmPasswordChange} value={confirmPassword}/> */}
        <Button title='Continue' color="#1d253b" onPress={ handleSubmit}/>
       
    </View>
    </SafeAreaView>
  )
}

export default Signup;