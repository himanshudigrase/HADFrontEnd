import axios from 'axios'
import { commonUrl } from './commonUrl'
const moodUrl = commonUrl
import AsyncStorage from '@react-native-async-storage/async-storage'


const postMoodService = async (patientId, mood) => {
  try {
    const savedToken = await AsyncStorage.getItem('token');
    const response = await axios.post(moodUrl + '/patients' + patientId + '/mood', mood, {
      headers: { Authorization: `Bearer ${savedToken}` }
    });
    return response.data
  } catch (e) {
    console.error(e);
  }
}


export default postMoodService