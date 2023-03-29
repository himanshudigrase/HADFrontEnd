import axios from 'axios'
import {commonUrl} from './commonUrl';
import item from './item';

// The API endpoint where login data is sent to
const activityUrl = activityUrl + `/user/`       // modify this according to backend
const activities = [];


const getActivities = async (userId) => {
 
  const activitiesID = await item.getItem(userId); 
  
  activitiesID.forEach(activity => {
    const response = axios.get(activityUrl + 'activityID/' +activity );
    activities.push(response.data)
  });
  
  return activities;
}

const exportObject = { getActivities }
export default exportObject