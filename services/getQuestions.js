import axios from 'axios'
import { commonUrl } from './commonUrl'

const questionUrl = commonUrl;


const getQuestions = async (patientId,activityId) => {

  let response = await axios.get(questionUrl +'/patients'+ patientId+'/activity'+activityId);


  return response.data;
}


export default getQuestions;

