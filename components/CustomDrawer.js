import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Avatar } from 'react-native-paper'
import { AuthContext} from '../context/AuthContext'

const CustomDrawer = (props) => {
  const { logout } = useContext(AuthContext);
  return (
    
      <View className="flex-1">
        <DrawerContentScrollView {...props}>
          <ImageBackground className="p-20">
            <Avatar.Image className="" source={require('../assets/images/user2.png')} />
            <Text>User Test</Text>
          </ImageBackground>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View>
          <TouchableOpacity onPress={() => {logout()}} className='pt-15 pb-15'>
            <Text className='ml-5 mb-6'>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    
  )
}

export default CustomDrawer