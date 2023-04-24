import { View, Text, TextInput,StyleSheet,Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import signupService from '../services/signupService'
import { Button } from 'react-native-paper';
import MyButton from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';

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
      firstName: route.params.fname,
      lastName: route.params.lname,
      gender: inputValues.sex,
      dob: inputValues.dob,
      age: 0
    }
  }
  let userId = 0;

  const submitHandler = async () => {
    try {
      console.log(detailsObj)
      userId = await signupService.signup(detailsObj);


      if (userId) {
        console.log("here");
        (() => navigation.navigate('MedHistory', {
          userId: userId.userId,
          wants_doc: doc
        }))();
      }
    } catch (exception) {

      // (() => navigation.navigate('MedHistory', {
      //   wants_doc: doc
      // }))();
      console.log(exception);
    }
  }
  return (
<LinearGradient colors={['#9FB9F9', '#FCFDFF']} style={{ flex: 1 }}>
    <SafeAreaView className="flex justify-center items-center  h-full ">
    <Image style={styles.bgImage} source={require('../assets/images/bg2.png')} />
      <Text className="-top-52 text-textColor text-2xl font-interBold">Better U.</Text>
      <View>
      
        <Input label="Enter DOB" otherProps={{
          title: "DOB", onChangeText: inputChangedHandler.bind(this, 'dob'),
          placeholder: "DD/MM/YYYY", value: inputValues.dob
        }} />

        <Input label="Enter Gender" otherProps={{
          title: "Gender", onChangeText: inputChangedHandler.bind(this, 'sex'),
          placeholder: "M/F/Others", value: inputValues.sex
        }} />

        {/* <Input label="Do you want Doctor now?" otherProps={{
          title: "DoctorW", onChangeText: handleDoc,
          placeholder: "Type Y/N", value: doc
        }} /> */}
<View className='pt-6'>
<MyButton mode="contained" onPress={submitHandler} title='Continue'></MyButton>
</View>

      </View>
    </SafeAreaView>
    </LinearGradient>
  )
}

export default DemoData;


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