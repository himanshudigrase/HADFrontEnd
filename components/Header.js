import { Appbar } from 'react-native-paper';
import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Appbar.Header>
      <Appbar.Action icon="menu"/>
      <Appbar.Content title="Welcome User" />
      <Appbar.Action icon="bell"/>
    </Appbar.Header>
    </View>
  )
}

export default Header