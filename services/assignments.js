import axios from 'axios'
import { commonUrl } from './commonUrl'
// The API endpoint where login data is sent to
const assignmentsUrl = commonUrl + `/assignment/`

const postAssignment = async (assignmentNumber,user) => {
  // Send the assignmentId to the assignmentsUrl API endpoint as an HTTP GET request
  // Note the async-await
  const response = await axios.post(user + assignmentsUrl + 'add', assignmentNumber)
  
  return response.data
}



// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { postAssignment }
export default exportObject