import { Appbar } from 'react-native-paper';
import { View, Text } from 'react-native'
import React from 'react'
import {DrawerActions} from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';



const Header = () => {
  const navigation = useNavigation();
  return (
    
    <Appbar.Header style={{}}>
      <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>       
      <Appbar.Content style={{}} title="better U" />
      <Appbar.Action icon="bell"/>
    </Appbar.Header>
    
  )
}

export default Header


