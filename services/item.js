import axios from "axios";
import { commonUrl } from './commonUrl';
const assignmentsUrl = commonUrl 
import assignments from './assignments';
const itemsDummy = require('../dummyData/item');


const getItem = async (user) => {
    // Send the assignmentId to the assignmentsUrl API endpoint as an HTTP GET request
    
    // const response = await assignments.getAssignment(userId);        // uncomment duting integration
    // let items = response.data;

    const items =  [{
          itemId:1,
          itemLevel:2
        },{
          itemId:1,
          itemLevel:4
        },{
          itemId:2,
          itemLevel:1
        }]


    const activitiesId = [];
    items.forEach(item => {
        // const res = axios.get(assignmentsUrl + '/item/' + item.itemId);    // uncomment during integration
    //    const itemType = res.data.type
        const itemType = 'activity'
        if(itemType ==='activity'){
        activitiesId.push({activityId:item.itemId,level:item.itemLevel});
       }
    });
  
    return activitiesId;
  }
  
//   activitiesId = [{
//     activityId:1,
//     level:1,
//   },{
//     activitiesId:1,
//     level:2
//   }]
  
  // Export the method as an object so that it can be accessible outside this file as a service
  const exportObject = { getItem }
  export default exportObject