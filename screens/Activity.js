import { View, Text,Image,StyleSheet } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import questions from '../services/getQuestions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator, Button, Card, RadioButton } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import MyButton from '../components/QuestionButton';
import Header from '../components/Header';
import { AuthContext } from '../context/AuthContext'
import { useNavigation } from '@react-navigation/native'

const Activity = ({ route }) => {
  const navigation = useNavigation();
  const [questionsAssigned, setQuestionsAssigned] = useState(false);      // to check if questions are loaded yet or not
  const [questionDisplay, setQuestionDisplay] = useState([]);             // to dynamically dispaly question  , was not necessay
  const [currentIndex, setCurrentIndex] = useState(0);                    // to dynamically display the question card according to question Index
  const [checked, setChecked] = useState(null);                           // to check status of radio button
  const [choicesSelected, setChoicesSelected] = useState([]);
  const [pId,setPid] = useState(null);
  const [completed,setCompleted] = useState(false);



  let disabledB;                                                         // to disable the button unless user selects an option
  let questionsToDisplay = [];                                            // to store response of API call 
  let choicesSelectedTillNow = [];
  let responseToSend = {};                                                // to store response which needs to send
  const activityId = route.params.activityId;
  const assignmentId = route.params.assignmentId;
  //console.log(assignmentId);
  let getPatient;
  const {logout} = useContext(AuthContext);

  // this function handles the put request of choices
  async function handleSubmit(responseToSend){
    
    await questions.sendAnswers(assignmentId,responseToSend);
    await questions.putAnswers(assignmentId,responseToSend);
    
    navigation.navigate('Dashboard');
  }

  // this hook fetches our questions for a particular patientId and activityId
  useEffect(() => {
    (async function toFetchQuestions() {
      try {
        getPatient = await AsyncStorage.getItem('patientId');
        questionsToDisplay = await questions.getQuestions(getPatient, activityId);
        
        if(questionDisplay == 401) logout();
      
        if (questionsToDisplay != [] && questionsToDisplay != undefined && questionsToDisplay != '') {
          setQuestionDisplay(questionsToDisplay);
         
          setPid(getPatient);
        
          setQuestionsAssigned(true);
        }

      } catch (error) {
        console.error(error);
      }
    })();
  }, [])




  return (
    <>

      {

        !questionsAssigned ? <ActivityIndicator size={40} className='pt-80 ' /> 
        :
        <LinearGradient colors={['#C1D3FD', '#FCFDFF']} style={{ flex: 1 }}>
           <Image style={styles.bgImage} source={require('../assets/images/verti.png')} />
          <View className='h-full'>
          
          <Header/>
            {currentIndex != questionDisplay.length ? 

            <Card className='shadow-none m-10 mt-32 pb-3'>
              <Card.Content>
                <Text className='text-colorr font-interMedium mb-4'>{questionDisplay[currentIndex].question}</Text>
                {Object.keys(questionDisplay[currentIndex].options).map((key) => (                 
                  <View key={key} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton className='font-interMedium '
                      value={key}
                      status={checked === key ? 'checked' : 'unchecked'}
                      onPress={() => setChecked(key)}
                    />
                    <Text className='ml-1'>{questionDisplay[currentIndex].options[key]}</Text>
                  </View>
                ))}
              </Card.Content>
              <Card.Actions>
                {checked === null ? disabledB = true : disabledB = false}
                <MyButton disabled={disabledB} onPress={() => { 
                  choicesSelectedTillNow = choicesSelected
                  choicesSelectedTillNow.push({"questionId":questionDisplay[currentIndex].questionId,"choice":checked}); 
                  setChoicesSelected(choicesSelectedTillNow);
                   setCurrentIndex(currentIndex + 1);
                    setChecked(null); }} title='Next'></MyButton>
              </Card.Actions>
            </Card> 
            : 

            <Card className='shadow-none m-10 mt-32 pb-3'>
              <Card.Content>
                <Text className='tracking-wider text-colorr font-interMedium mb-4'>Congratulations!! You have completed the activity. Click Submit to submit the responses. Do not forget to record your mood for today!!</Text>
              </Card.Content>
              <Card.Actions>
                <MyButton onPress={async () =>{responseToSend["choices"] = choicesSelected; 
                responseToSend["patientId"] = parseInt(pId);         
                responseToSend["activityId"] = activityId;
                handleSubmit(responseToSend);
                console.log(responseToSend);}} title='Submit'></MyButton>
              </Card.Actions>

            </Card>}


          </View>
          </LinearGradient>
      }
    </>

  )
}

export default Activity;

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    left: '-36%',
    right: '-20%',
    top: '26%',
    bottom: '10.72%',
    zIndex: 0,

  },
})