import axios from 'axios'
import { commonUrl } from './commonUrl'
import AsyncStorage from '@react-native-async-storage/async-storage'


const doctorUrl = commonUrl;

const getDoctors = async () => {
  let response;
  try {
    const savedToken = await AsyncStorage.getItem('token');
    response = await axios.get(doctorUrl + '/users/get-doctors', {
      headers: { Authorization: `Bearer ${savedToken}` }
    });
    console.log(response.data);
  } catch (e) {
  
    await AsyncStorage.removeItem('token');
      console.error(e.message);
      console.error(e);
      return false;
  }
  let doctorsList = [];

  response.data.forEach(res => {
    doctorsList.push({
      id: res.doctor.doctorId,
      experience: res.doctor.doctorDetails.experienceInYears,
      qualification: res.doctor.doctorDetails.qualification,
      specialization: res.doctor.doctorDetails.specialization,
      fname: res.demographics.firstName,
      lname: res.demographics.lastName,
    })
  });

  return doctorsList;
}


const assignDoctor = async (doctorId) => {
  try {
    const savedToken = await AsyncStorage.getItem('token');
    const patientId = await AsyncStorage.getItem('patientId');
    const data = { patientId: patientId, doctorId: doctorId };

    let response = await axios.post(doctorUrl + '/admin/assignDoctorToPatient', data, {
      headers: { Authorization: `Bearer ${savedToken}` }

    });
    await AsyncStorage.setItem('doctorId',doctorId.toString());
    return response.data;
  } catch (error) {
    console.error(error);

    if (error.response && error.response.status === 401) {
      return error.response.status;
    }
    throw error;
  }
  //.catch(error=>{console.error(error); return 401});
  // console.log(response);
  if (response.status === 401) {
    return response.status;
  }


}

const doctorObj = { getDoctors, assignDoctor }
export default doctorObj;

