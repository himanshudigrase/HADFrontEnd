import { Appbar } from 'react-native-paper';
import { View, Text } from 'react-native'
import React from 'react'
import {DrawerActions} from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';



const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Appbar.Header>
      <Appbar.Action icon="menu" /> 
      {/* onPress={() => navigation.dispatch(DrawerActions.openDrawer())} */}
      <Appbar.Content title="Welcome User" />
      <Appbar.Action icon="bell"/>
    </Appbar.Header>
    </View>
  )
}

export default Header