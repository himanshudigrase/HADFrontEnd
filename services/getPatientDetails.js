import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { commonUrl } from './commonUrl'

// The API endpoint where login data is sent to
const detailsUrl = commonUrl;

const getPatientDetails = async (patientId) => {
  try {
    const savedToken = await AsyncStorage.getItem('token');
    const response = await axios.get(detailsUrl + '/users/get/' + patientId, {
      headers: { Authorization: `Bearer ${savedToken}` }
    })
      .then(response => response);
    if(response.status == 401)return response.status;
    //console.log(response.patient);
    // const Medresponse = await axios.get(detailsUrl + '/patients/' +patientId+'/medical-history', {
    //   headers: { Authorization: `Bearer ${savedToken}` }
    // })
    //   .then(Medresponse => Medresponse.data);
    // console.log(Medresponse);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
export default getPatientDetails;