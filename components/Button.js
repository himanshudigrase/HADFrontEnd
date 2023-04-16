import { Button } from 'react-native-paper';
import { View, Text } from 'react-native'
import React from 'react'

const CustomButton = ({props,title}) => {
  return (
    <View>
      <Button {...props}>{title}</Button>
    </View>
  )
}

export default CustomButton