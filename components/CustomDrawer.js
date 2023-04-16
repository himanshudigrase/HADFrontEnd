import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Avatar } from 'react-native-paper'
import { AuthContext} from '../context/AuthContext'
import { IconButton } from 'react-native-paper';



const CustomDrawer = (props) => {
  const { logout } = useContext(AuthContext);
  return (
    
      <View className="flex-1">

        <DrawerContentScrollView {...props}>

          <ImageBackground className="bg-backgr p-20">
            <Avatar.Image className="" source={require('../assets/images/user2.png')} />
            <Text className='mt-4 text-colorr font-interBold'>User Test</Text>
          </ImageBackground>
          
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        <View className='flex bg-backgr'>
          <TouchableOpacity onPress={() => {logout()}} className='flex-row pb-3 items-center justify-start'>
            <IconButton className='ml-3' icon='login' size={22} color='black'/>
            <Text className='text-colorr font-interBold'>Sign out</Text>
          </TouchableOpacity>
        </View>

      </View>
    
  )
}

export default CustomDrawer