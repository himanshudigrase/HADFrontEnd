import { Appbar, Divider } from 'react-native-paper';
import { View, Text } from 'react-native'
import React from 'react'
import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className='ml-1'>
      <Appbar.Header style={{ backgroundColor: 'transparent', }}>
        <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>       
        <Appbar.Content style={{}} title="Better U." titleStyle={{ fontFamily: 'inter-semibold', fontSize: 22 }} />
        <Appbar.Action icon="bell" />
      </Appbar.Header>
      <Divider  />
    </View>
  )
}

export default Header


