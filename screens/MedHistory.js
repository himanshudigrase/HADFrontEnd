import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import MyButton from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';
import SInput from '../components/ShortInput';
import signUpService from '../services/signupService';


const MedHistory = ({ route }) => {
  const [inputValues, setInputValues] = useState({
    height: '',
    weight: '',
    diseases: ''
  })
  const [isSmoker, setIsSmoker] = useState(false);
  const [drinksAlcohol, setdrinkAlcohol] = useState(false);

  // Following code is for importing date in dd/mm/yyyy format
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  //console.log(today);

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue
      };
    });
  }





  const medHistDet = {
    patientId: route.params.userId,
    wantsDoc: route.params.wants_doc,
    joiningDate: today,
    medicalHistory: {
      id:0,
      height: inputValues.height,
      weight: inputValues.weight,
      smoker: isSmoker,
      drinksAlcohol: drinksAlcohol,
      diseases: inputValues.diseases
    }
  }
  //console.log(medHistDet);

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

  const handleisSmoker = (text) => {
    if (text == 'Y') setIsSmoker(true)
  }
  const handleisDrinker = (text) => {
    if (text == 'Y') setdrinkAlcohol(true)
  }

  const submitHandler = async () => {
    try {

      res = await signUpService.submiDetails(medHistDet);  //-- uncomment this if checking on backend
      console.log(res)                                        
       if(res.success === true){
         console.log("In MedHost");
           (()=>navigation.navigate('Login',{
              demographics:res.response.demographics,
              patient:res.response.patient,
              medicalHistory:res.response.patient.medicalHistory,        // uncomment these lines the whole try block during backend testing
              userRole:res.response.userRole


           }))();
       }
    } catch (exception) {
      console.log(exception)

    }
  }

  return (
    <LinearGradient colors={['#9FB9F9', '#FCFDFF']} style={{ flex: 1 }}>
      <SafeAreaView className="flex justify-center items-center  h-full ">
        <Image style={styles.bgImage} source={require('../assets/images/bg2.png')} />
        <Text className="-top-40 text-textColor text-2xl font-interBold">Better U.</Text>
        <View>
          <View className='flex-row'>
            <SInput label="Height" otherProps={{
              onChangeText: inputChangedHandler.bind(this, 'height'),
              placeholder: 'eg: 172',
              value: inputValues.height
            }} />
            <SInput label="Weight" otherProps={{
              onChangeText: inputChangedHandler.bind(this, 'weight'),
              placeholder: 'eg: 68',
              value: inputValues.weight
            }} />
          </View>


          <View className='flex-row'>
            <SInput label="Do you Smoke?" otherProps={{
              onChangeText: handleisSmoker,
              placeholder: 'Type Y/N',
              value: isSmoker
            }} />
            <SInput label="Do you Drink?" otherProps={{
              onChangeText: handleisDrinker,
              placeholder: 'Type Y/N',
              value: drinksAlcohol
            }} />
          </View>





          <Input label="Diseases" otherProps={{
            onChangeText: inputChangedHandler.bind(this, 'diseases'),
            placeholder: 'eg: 68',
            value: inputValues.diseases
          }} />

<View className='pt-6'>
<MyButton  mode="contained" onPress={submitHandler} title='Continue'></MyButton>
</View>
          
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default MedHistory;


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
    width: 220
  },
})