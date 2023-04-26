import axios from 'axios'
import { commonUrl } from './commonUrl'
// The API endpoint where login data is sent to
const loginBaseUrl = commonUrl

const signup = async (details) => {
  const response = await axios.post(loginBaseUrl + '/users/add', details);
  
  if (response.status === 200) {
    return response.data
  } else {
    throw new Error('Error signing up')
  }
}

const submiDetails = async(details) =>{
  const response = await axios.post(loginBaseUrl + '/users/add-patient',details)
  
  if (response.status === 200) {
    return response.data
  } else {
    throw new Error('Error submitting details')
  }
}

// Export the method as an object so that it can be accessible outside this file as a service
const signupService = { signup,submiDetails }
export default signupService