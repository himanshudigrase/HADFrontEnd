import {ScrollView ,View} from 'react-native'
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
 const blogData = require('../dummyData/blogs')



const Blogs = () => {
 const [blogs,setBlogs] = useState([]);

  useEffect(() =>{
    let blogs = blogData.blog;
    //console.log(blogs)
    setBlogs(blogs);
  })
  return (
    <View className="">
      
      {
        blogs.map((blog,key) =>{
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
    </View>
  )
}

export default Blogs