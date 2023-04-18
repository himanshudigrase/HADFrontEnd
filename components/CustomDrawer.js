import { View, Text, ImageBackground, TouchableOpacity,StyleSheet,Image } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Avatar } from 'react-native-paper'
import { AuthContext} from '../context/AuthContext'
import { IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import MyButton from '../components/CustomButton';


const CustomDrawer = (props) => {
  const { logout } = useContext(AuthContext);
  return (
    <LinearGradient colors={['#C1D3FD', '#FCFDFF']} style={{ flex: 1 }}>
      <View className="flex-1 ">
      {/* <Image style={styles.bgImage} source={require('../assets/images/verti.png')} /> */}
        <DrawerContentScrollView {...props}>

          <ImageBackground className=" p-20">
            <Avatar.Image className="" source={require('../assets/images/user2.png')} />
            <Text className='mt-4 text-black font-interBold'>User Test</Text>
          </ImageBackground>
          
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        <View className='flex'>
          <TouchableOpacity onPress={() => {logout()}} className='flex-row pb-3 items-center justify-start'>
            <IconButton className='ml-3' icon='login' size={22} color='black'/>
            <Text className='text-black font-interBold'>Sign out</Text>
          </TouchableOpacity>
        </View>

      </View>
      </LinearGradient>
    
  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    left: '-300%',
    right: '-20%',
    top: '26%',
    bottom: '10.72%',
    zIndex: 0,

  },
})