import axios from 'axios'
import { commonUrl } from './commonUrl'

// The API endpoint where login data is sent to
const assignmentsUrl = commonUrl 

const getAssignments = async (userId) => {
  
  const response = await axios.get( assignmentsUrl + '/patients/'+3+'/assignments'); // for integration
  let assgns = response.data.response; 

  // below code to fetch 
  let arrOfActivities = [];
                              
      assgns.forEach(assgn => {
        // here i dont have to bother about item type , considering every item to display
        arrOfActivities.push(
          { 
            id:assgn.item.itemId,
            type:assgn.item.type,
            name: assgn.item.activity.name, 
            description:assgn.item.activity.description,
            itemLevel:assgn.itemLevel
          })
      }); 

      // console.log(arrOfActivities);

  return arrOfActivities;
}



// console.log(getAssignments);

export default getAssignments







// arrOfActivities = [{
//   itemId:1,
//   itemLevel:2
// },{
//   itemId:1,
//   itemLevel:4
// },{
//   itemId:2,
//   itemLevel:1
// }]
