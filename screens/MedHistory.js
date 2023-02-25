import { View, Text, Button, TextInput } from 'react-native'
import React,{useLayoutEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import RadioGroup from 'react-native-radio-buttons-group';
import signUpService from '../services/signupService'




const MedHistory = ({route}) => {


const [inputValues, setInputValues] = useState({
  height:'',
  weight:'',
  diseases:''
  })
const[isSmoker,setIsSmoker] = useState(false);
const[drinksAlcohol,setdrinkAlcohol] = useState(false);

// Following code is for importing date in dd/mm/yyyy format
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
//console.log(today);

  function inputChangedHandler(inputIdentifier,enteredValue){
    setInputValues((curInputValues)=>{
      return {
        ...curInputValues,
        [inputIdentifier]:enteredValue
      };
    });
  }
  




  const medHistDet = {
    patientId: route.params.userId,
    wantsDoc : route.params.wants_doc,
    joiningDate:today,
    medicalHistory:{
      height:inputValues.height,
      weight:inputValues.weight,
      isSmoker:isSmoker,
      drinksAlcohol:drinksAlcohol,
      diseases:inputValues.diseases
    }
  }
  //console.log(medHistDet);
  
    function inputChangedHandler(inputIdentifier,enteredValue){
      setInputValues((curInputValues)=>{
        return {
          ...curInputValues,
          [inputIdentifier]:enteredValue
        };
      });
    }


  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])

    const handleisSmoker = (text)=>{
      if(text == 'Y')setIsSmoker(true)
    }
    const handleisDrinker = (text)=>{
      if(text == 'Y')setdrinkAlcohol(true)
    }
    
    const submitHandler = async()=>{
      try{
       console.log(medHistDet)
        res = await signUpService.submiDetails(medHistDet);
        console.log(res)
       if(res.success === true){
         console.log("here");
           (()=>navigation.navigate('Dashboard',{
               userId:res,
             
               
           }))();
       }
     }catch(exception){
      console.log(exception)
    //    (()=>navigation.navigate('Dashboard'))();
      }}

  return (
    <SafeAreaView className="flex justify-center items-center bg-backgr h-full ">
      <View> 
        <Text>Lets troubleshoot your troubles together</Text>
        
        <Input label="Height" otherProps={{
          onChangeText:inputChangedHandler.bind(this,'height') ,
          placeholder:'eg: 6\'12',
          value:inputValues.height
        }}/> 
        <Input label="Weight" otherProps={{
          onChangeText:inputChangedHandler.bind(this,'weight') ,
          placeholder:'eg: 68',
          value:inputValues.weight
        }}/> 
         {/* <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        /> */}
        <Input label="Do you Smoke?" otherProps={{
          onChangeText:handleisSmoker ,
          placeholder:'Type Y/N',
          value:isSmoker
        }}/>
        <Input label="Do you Drink?" otherProps={{
          onChangeText:handleisDrinker ,
          placeholder:'Type Y/N',
          value:drinksAlcohol
        }}/>
         <Input label="Diseases" otherProps={{
          onChangeText:inputChangedHandler.bind(this,'diseases') ,
          placeholder:'eg: 68',
          value:inputValues.diseases
        }}/> 
       
        <Button title='Continue' color="#1d253b" onPress={submitHandler}/>
     </View>
    </SafeAreaView>
  )
}

export default MedHistory;





//   const [radioButtons, setRadioButtons] = useState([
//     {
//         id: '1', // acts as primary key, should be unique and non-empty string
//         label: 'Yes',
//         value: 'yes'
//     },
//     {
//         id: '2',
//         label: 'No',
//         value: 'no'
//     }
// ]);

// function onPressRadioButton(radioButtonsArray) {
//   setRadioButtons(radioButtonsArray);
// }