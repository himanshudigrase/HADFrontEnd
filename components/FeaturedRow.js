import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id,title,description,featuredCategory}) => {
  return (
    <View>
        <View className="mt-4 flex-row justify-between px-4 items-center">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>
        <Text className="text-xs px-4 text-gray-500">{description}</Text>
    
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal:15
            }}
            showsHorizontalScrollIndicator={false}
            className = "pt-4"
        >
            {/* Restaurant Cards */}
            <RestaurantCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
            rating="4"
            genre="Japanese"
            address="3423"
            short_description
            />
            <RestaurantCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
            rating="4"
            genre="Japanese"
            address="3423"
            short_description
            />
            <RestaurantCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
            rating="4"
            genre="Japanese"
            address="3423"
            short_description
            />
            <RestaurantCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
            rating="4"
            genre="Japanese"
            address="3423"
            short_description
            />
            <RestaurantCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
            rating="4"
            genre="Japanese"
            address="3423"
            short_description
            />
            <RestaurantCard 
            id="123"
            imgUrl="https://links.papareact.com/gn7"
            title="Japa"
            rating="4"
            genre="Japanese"
            address="3423"
            short_description
            />
        </ScrollView>
    
    
    </View>
  )
}

export default FeaturedRow