import axios from 'axios'
import {commonUrl} from './commonUrl'
// The API endpoint where login data is sent to
const activityUrl = activityUrl + `/user/`

const signup = async (details) => {
  // Send the login credential data to the loginBaseUrl API endpoint as an HTTP POST request
  // Note the async-await
  const response = await axios.get(activityUrl + 'add', details)
  
  // Return .data field of the response object which would contain the logged in user object
  // And the user state would now be updated by the handleLogin() method
  return response.data
}

// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { signup,submiDetails }
export default exportObject