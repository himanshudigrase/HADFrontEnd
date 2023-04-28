import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { commonUrl } from './commonUrl'

// The API endpoint where login data is sent to
const assignmentsUrl = commonUrl

const getAssignments = async (patientId) => {

  try {
    
    const savedToken = await AsyncStorage.getItem('token');
    const response = await axios.get(assignmentsUrl + '/patients/' + patientId + '/assignments', {
      headers: { Authorization: `Bearer ${savedToken}` }
    })
      .then(response => response);  
    const assgns = response.data.response;
    if(Object.keys(assgns).length != 0 ){
      const doctorId = assgns[0].doctor.doctorId;
      if(doctorId!=null) await AsyncStorage.setItem('doctorId', doctorId.toString());
      
      let arrOfActivities = [];
  //console.log(assgns);
      assgns.forEach(assgn => {
        arrOfActivities.push(
          {
            assignmentId: assgn.assignmentId,
            id: assgn.item.itemId,
            type: assgn.item.type,
            name: assgn.item.activity.name,
            description: assgn.item.activity.description,
            itemLevel: assgn.itemLevel
          })
      });
      //console.log('Assignemnt Id below');
      //console.log(arrOfActivities);
      return arrOfActivities;
    }else return [];
    
    
  } catch (e) {
    console.log(e);
    return false;
  }

}

export default getAssignments
