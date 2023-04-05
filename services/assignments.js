import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { commonUrl } from './commonUrl'

// The API endpoint where login data is sent to
const assignmentsUrl = commonUrl

const getAssignments = async (patientId) => {

  try {
    console.log("inside getAssignments");
    const savedToken = await AsyncStorage.getItem('token');
    const response = await axios.get(assignmentsUrl + '/patients/' + patientId + '/assignments', {
      headers: { Authorization: `Bearer ${savedToken}` }
    })
      .then(response => response.data.response);

    const assgns = response;

    let arrOfActivities = [];

    assgns.forEach(assgn => {
      // here i dont have to bother about item type , considering every item to display
      arrOfActivities.push(
        {
          id: assgn.item.itemId,
          type: assgn.item.type,
          name: assgn.item.activity.name,
          description: assgn.item.activity.description,
          itemLevel: assgn.itemLevel
        })
    });


    return arrOfActivities;
  } catch (e) {
    console.log(e);
  }

}

export default getAssignments
