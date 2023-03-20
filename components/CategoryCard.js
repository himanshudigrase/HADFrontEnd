import { View,  TouchableOpacity,Text, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity className=" mr-2">
    <Image
    source={{
        uri:imgUrl
    }}
    className="h-40 w-40 rounded"
    />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard;