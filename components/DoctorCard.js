import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StarIcon,MapPinIcon } from 'react-native-heroicons/solid'

const DoctorCard = ({
    id,imgUrl,title,short_description
}) => {
  return (
    <TouchableOpacity className="flex-row m-2"> 
      <Image
        source={{
            uri:imgUrl
        }}
        className="h-40 w-40 rounded-sn"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="#00CCBB" opacity={0.5} size={22}/>
            <Text className="text-gray-500">
                <Text>deqafault</Text>
                <Text>{short_description}</Text>
            </Text>
        </View>
      
      </View>

    </TouchableOpacity>
  )
}

export default DoctorCard