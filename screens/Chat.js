import * as TalkRn from '@talkjs/expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native'

export default function ChatComponent(props) {
  const [loadChat, setLoadChat] = useState(false);
  const [patientId, setPatientId] = useState('');
  const [doctorId, setDoctorId] = useState('');

  useEffect(() => {
    (async () => {
      const getPatient = await AsyncStorage.getItem('patientId');
      const getDoctor = await AsyncStorage.getItem('doctorId');
      setPatientId(getPatient);
      setDoctorId(getDoctor);
    })();
  }, []);


 
//  const imageId = require('../assets/images/user.jpg');
//  console.log(imageId);



  const me = {
    id: patientId,
    name: 'Alice',
    photoUrl: 'https://cdn-icons-png.flaticon.com/512/1533/1533506.png',
    role: 'default',
    locale:'hi-IN'
  };

  const other = {
    id: doctorId,
    name: 'Sebastian',
    photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
    role: 'default',
  };

  const conversationBuilder = TalkRn.getConversationBuilder(
    TalkRn.oneOnOneId(me, other)
  );

  conversationBuilder.setParticipant(me);
  conversationBuilder.setParticipant(other);

  return (
    
    <TalkRn.Session appId="tPMMa6GJ" me={me}>
      <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
    </TalkRn.Session>
  
  );
}


