import axios from 'axios'
import { commonUrl } from './commonUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'
const questionUrl = commonUrl;

const getQuestions = async (patientId,activityId) => {
  const savedToken = await AsyncStorage.getItem('token');

  let response = await axios.get(questionUrl +'/activities/'+ activityId+'/questions',{
    headers: { Authorization: `Bearer ${savedToken}` }
  }).then(response => response).catch((e)=>{

  });

  return response.data;
}

const putAnswers = async(assignmentId,responseToSend) =>{
  const savedToken = await AsyncStorage.getItem('token');
  
  let response = await axios.put(questionUrl +'/assignment/'+ assignmentId+'/mark-as-completed',responseToSend,{
    headers: { Authorization: `Bearer ${savedToken}` }
  }).then(response => response).catch((e)=>{

});

return response;
}



const sendAnswers = async(assignmentId,responseToSend) =>{
  const savedToken = await AsyncStorage.getItem('token');
  
  let response = await axios.post(questionUrl +'/answers/save',responseToSend,{
    headers: { Authorization: `Bearer ${savedToken}` }
  }).then(response => response).catch((e)=>{

});

return response;
}




const questions = {getQuestions,putAnswers,sendAnswers}
export default questions;

