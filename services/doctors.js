import axios from 'axios'
import { commonUrl } from './commonUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'


const doctorUrl = commonUrl;

const getDoctors = async () => {
  const savedToken = await AsyncStorage.getItem('token');
  let response = await axios.get(doctorUrl +'/users/get-doctors',{
    headers: { Authorization: `Bearer ${savedToken}` }
  }).then(response => response.data);
  
  let doctorsList = [];

  response.forEach(res =>{
    doctorsList.push({
      id: res.doctor.doctorId,
      experience: res.doctor.doctorDetails.experienceInYears,
      qualification: res.doctor.doctorDetails.qualification,
      specialization: res.doctor.doctorDetails.specialization,
      fname:res.demographics.firstName,
      lname:res.demographics.lastName,
    }
      
    )
  })

  return doctorsList;
}


const assignDoctor = async(doctorId)=>{
  const savedToken = await AsyncStorage.getItem('token');
  const patientId = await AsyncStorage.getItem('patientId');
  const data = {patientId: patientId, doctorId: doctorId};
  
  let response = await axios.post(doctorUrl +'/admin/assignDoctorToPatient',data,{
    headers: { Authorization: `Bearer ${savedToken}` }
  }).then(response => response.data);


  return response;
}

const doctorObj = {getDoctors,assignDoctor}
export default doctorObj;

