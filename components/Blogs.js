import {ScrollView ,View} from 'react-native'
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { ActivityIndicator } from 'react-native-paper'
 const blogData = require('../dummyData/blogs')



const Blogs = () => {
 const [blogs,setBlogs] = useState([]);
 const [loading,setLoading] = useState(false);
  
 useEffect(() =>{
    setLoading(true);
    let blogs = blogData.blog;
    setBlogs(blogs);
  })

  return (
    loading ?
    <View className="">
      
      {
        blogs.map((blog) =>{
          return(
            <BlogCard
            key={blog.id}
            author = {blog.author}
            title = {blog.title}
            information = {blog.information}
            imgUrl = {blog.image}
            description = {blog.description}
            />
          )
        })
      }
    </View> : <ActivityIndicator size={'large'} color='orange'/> 
  )
}

export default Blogs;