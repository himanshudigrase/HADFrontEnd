import {ScrollView ,View} from 'react-native'
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
const blogData = require('../dummyData/blogs')



const Blogs = () => {
 const [blogs,setBlogs] = useState([]);

  useEffect(() =>{
    let blogs = blogData.blog;
    setBlogs(blogs);
  })
  return (
    <View className="">
      
      {
        blogs.map((blog,key) =>{
          return(
            <BlogCard
            key={blog.id}
            title = {blog.title}
            information = {blog.information}
            imgUrl = {blog.imgUrl}
            />
          )
        })
      }
    </View>
  )
}

export default Blogs