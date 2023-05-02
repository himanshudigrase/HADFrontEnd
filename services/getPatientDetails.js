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
    //console.log(response);
    return response.data;
  } catch (e) {
    await AsyncStorage.removeItem('token');
    return false;
  }
}

const getToken =async (patientId)=>{
  try {
    const savedToken = await AsyncStorage.getItem('token');
    const response = await axios.get(detailsUrl + '/patients/' + patientId+'/fcm-token',{
      headers: { Authorization: `Bearer ${savedToken}` }
    });
    // if(response.status == 401)return response.status;
    console.log('fcm token');
    console.log(response.data);
    return response.data;
  } catch (e) {
    await AsyncStorage.removeItem('token');
   
    return false;
  }
}

const putToken =async (patientId,token)=>{
  try {
    const savedToken = await AsyncStorage.getItem('token');
    const response = await axios.put(detailsUrl + '/patients/' + patientId+'/fcm-token',token,{
      headers: { Authorization: `Bearer ${savedToken}` }
    });
    console.log(savedToken);
    return response.data;
  } catch (e) {
    await AsyncStorage.removeItem('token');
   
    return false;
  }
}

const patientObj = {getPatientDetails,getToken,putToken};
export default patientObj;