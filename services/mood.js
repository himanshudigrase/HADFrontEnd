import axios from 'axios'
import { commonUrl } from './commonUrl'
const moodUrl = commonUrl
import AsyncStorage from '@react-native-async-storage/async-storage'


const postMoodService = async (mood) => {
  try {
    const savedToken = await AsyncStorage.getItem('token');
    console.log(mood);
    const response = await axios.post(moodUrl + '/patients/set-mood', mood, {
      headers: { Authorization: `Bearer ${savedToken}` }
    });
    return response.data
  } catch (e) {
    console.error(e);
  }
}

export default postMoodService