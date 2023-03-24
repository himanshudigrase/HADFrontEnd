import {ScrollView ,View} from 'react-native'
import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <View className="">
      
      <BlogCard className=""
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />
      <BlogCard
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />
      <BlogCard
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />
      <BlogCard
      imgUrl="https://links.papareact.com/gn7"
      title="Testing 1"
      />
    </View>
  )
}

export default Blogs