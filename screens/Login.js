import { View, Text, Button, TextInput } from 'react-native'
import React,{useContext, useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import  {AuthContext}  from '../context/AuthContext';

const Login = () => {
   const {test} = useContext(AuthContext);
  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])
  
  return (
    <SafeAreaView className="flex justify-center items-center bg-backgr h-full ">
      <View> 
        <Input label="Username" otherProps={{
          placeholder:"Email ID"
        }}/>
        <Text>{test}</Text>
        
        <Input label="Password" otherProps={{
          placeholder:"Password"
        }}/>
        <Button title='Continue' color="#1d253b" onPress={()=>navigation.navigate('AppStack',{screen:'Dashboard'})}/>
        
    </View>
    </SafeAreaView>
  )
}

export default Login;