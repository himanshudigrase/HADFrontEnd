import { View, Text, Button, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import signupService from '../services/signupService'




const DemoData = ({ route }) => {

  const [inputValues, setInputValues] = useState({
    dob: '',
    sex: '',
  })
  const [doc, setDoc] = useState(false);
  // console.log(route);

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue
      };
    });
  }
  const handleDoc = (text) => {
    if (text == 'Y') setDoc(true)
  }

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });

  }, [])

  const detailsObj = {
    email: route.params.demodet.email,
    password: route.params.demodet.password,
    userRole: {
      roleId: route.params.demodet.roleID,
    },

    demographics: {
      userId: 0,
      fname: route.params.fname,
      lName: route.params.lname,
      sex: inputValues.sex,
      dob: inputValues.dob,
      age: 0
    }
  }
  let userId = 0;

  const submitHandler = async () => {
    try {
      console.log(detailsObj)
      userId = await signupService.signup(detailsObj);

      console.log(userId);
      console.log(userId.response.userId);

      if (userId.success === true) {
        console.log("here");
        (() => navigation.navigate('MedHistory', {
          userId: userId.response.userId,

          wants_doc: doc
        }))();
      }
    } catch (exception) {

      (() => navigation.navigate('MedHistory', {
        wants_doc: doc
      }))();
    }
  }
  return (

    <SafeAreaView className="flex justify-center items-center bg-backgr h-full ">

      <View>
        <Text>Let's know more about you!</Text>

        <Input label="Enter DOB" otherProps={{
          title: "DOB", onChangeText: inputChangedHandler.bind(this, 'dob'),
          placeholder: "DD/MM/YYYY", value: inputValues.dob
        }} />

        <Input label="Enter Gender" otherProps={{
          title: "Gender", onChangeText: inputChangedHandler.bind(this, 'sex'),
          placeholder: "M/F/Others", value: inputValues.sex
        }} />

        <Input label="Do you want Doctor now?" otherProps={{
          title: "DoctorW", onChangeText: handleDoc,
          placeholder: "Type Y/N", value: doc
        }} />

        <Button title='Continue' color="#1d253b" onPress={submitHandler} />
      </View>
    </SafeAreaView>
  )
}

export default DemoData;