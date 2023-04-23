import axios from 'axios'
import { commonUrl } from './commonUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'


const doctorUrl = commonUrl;

const getDoctors = async (patientId,doctorId) => {
  const savedToken = await AsyncStorage.getItem('token');
  let response = await axios.get(doctorUrl +'/doctors/get-all',{
    headers: { Authorization: `Bearer ${savedToken}` }
  }).then(response => response.data);
  
  let doctorsList = [];

  response.forEach(res =>{
    doctorsList.push({
      id: res.doctorId,
      experience: res.doctorDetails.experienceInYears,
      qualification: res.doctorDetails.qualification,
      specialization: res.doctorDetails.specialization,
      name:'DOCTOR'
    }
      
    )
  })
  console.log(response);


  return doctorsList;
}


const assignDoctor = async(doctorId)=>{
  const savedToken = await AsyncStorage.getItem('token');
  const patientId = await AsyncStorage.getItem('patientId');
  const data = {patientId: patientId, doctorId: doctorId};
  let response = await axios.post(doctorUrl +'/assignDoctorToPatient',data,{
    headers: { Authorization: `Bearer ${savedToken}` }
  }).then(response => response.data);


  console.log(response);

  return response;
}

const doctorObj = {getDoctors,assignDoctor}
export default doctorObj;

