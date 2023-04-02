import axios from 'axios'
import { commonUrl } from './commonUrl'

const loginUrl = commonUrl 

const loginUser = async (email,password) => {
  
  const response = await axios.post( loginUrl + '/auth/login'+email+'/'+password); 
  return response.data; 

}


export default loginUser






