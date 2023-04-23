import axios from 'axios'
import { commonUrl } from './commonUrl'

const questionUrl = commonUrl;

const getQuestions = async (patientId,activityId) => {
  let response = await axios.get(questionUrl +'/patients'+ patientId+'/activity'+activityId,{
    headers: { Authorization: `Bearer ${savedToken}` }
  }).then(response => response.data.response);

  
  return response.data;
}


export default getQuestions;

