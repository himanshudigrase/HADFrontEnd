import { View, Text } from 'react-native'
import React from 'react'

const Blog = ({author,title, imgUrl, information ,description}) => {
  return (
    <View>
      <Text>Blog </Text>
      <Text>{author}</Text>
    </View>
  )
}

export default Blog