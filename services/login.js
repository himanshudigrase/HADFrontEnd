import axios from 'axios'
import { commonUrl } from './commonUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'

const loginUrl = commonUrl

const loginUser = async (email, password) => {
  const data = {
    email: email,
    password: password
  }
  try {
    const response = await axios.post(loginUrl + '/auth/login', data);
    //console.log(response.data);
    return response.data.token;
  } catch (e) {
    console.error(e);
  }

}
const getID = async (email) => {

  try {
    const savedToken = await AsyncStorage.getItem('token');
    let reqInstance = axios.create({
      headers: {
        Authorization: `Bearer ${savedToken}`
      }
    }
    )
    const response = await reqInstance.get(loginUrl + '/users/' + email);
    //console.log('id get' + response.data.response.userId);  -->           Sreekar's config for getting PId
    return response.data.userId;
  } catch (e) {
    console.log(e);
  }
}
const exportObject = { loginUser, getID }
export default exportObject





