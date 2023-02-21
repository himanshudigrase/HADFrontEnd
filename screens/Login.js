import { View, Text, Button, TextInput } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    
    }, [])
  
  return (
    <SafeAreaView className="flex justify-center items-center bg-backgr h-full ">
      <View> 
        <TextInput title="Username" />
        <TextInput/>
        <Button title='Continue' color="#1d253b" onPress={()=>navigation.navigate('Dashboard')}/>
        
    </View>
    </SafeAreaView>
  )
}

export default Login;