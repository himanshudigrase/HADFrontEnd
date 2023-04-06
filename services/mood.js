import axios from 'axios'
import { commonUrl } from './commonUrl'
const moodUrl = commonUrl 

const postMood = async (patientId,mood) => {

  try{
    const savedToken = await AsyncStorage.getItem('token');
    const response = await axios.post(moodUrl +'/patients'+ patientId+'/mood',mood,{
      
          headers: { Authorization: `Bearer ${savedToken}` }
        
    });
    
    return response.data
  }catch(e){
    console.error(e);
  }
}

const exportObject = { postMood }
export default exportObject