import axios from 'axios'
import { commonUrl } from './commonUrl'
// The API endpoint where login data is sent to
const assignmentsUrl = commonUrl + `/assignment/`

const getAssignment = async (assignmentNumber) => {
  // Send the assignmentId to the assignmentsUrl API endpoint as an HTTP GET request
  // Note the async-await
  const response = await axios.get(assignmentsUrl + 'add', assignmentNumber)
  
  return response.data
}



// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { getAssignment }
export default exportObject