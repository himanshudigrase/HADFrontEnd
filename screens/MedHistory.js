import { View, Text, Button, TextInput } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MedHistory = ({route}) => {
  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])
  
  return (
    <SafeAreaView className="flex justify-center items-center bg-backgr h-full ">
      <View> 
        <Text>Lets troubleshoot your troubles together</Text>
        <TextInput placeholder='Disease1' title="Username"/>
        <TextInput placeholder='Disease2' title="Age"/>
        <TextInput placeholder='Disease3' title="Gender"/>
        <Button title='Continue' color="#1d253b" onPress={()=>navigation.navigate('Dashboard',{route})}/>
     </View>
    </SafeAreaView>
  )
}

export default MedHistory;