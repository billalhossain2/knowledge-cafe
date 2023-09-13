import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Bookmarks from '../Bookmarks/Bookmarks'
import Blog from '../Blog/Blog'
const Blogs = props => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const loadBlogs = async()=>{
    const res = await fetch(`data/blogs.json`);
    const allblogs = await res.json();
    setBlogs(allblogs)
  }

  useEffect(()=>loadBlogs, [])
  return (
    <div className='flex lg:flex-row flex-col mt-10 gap-5 mb-10'>
      <div className='flex-1 space-y-10'>
      {
        blogs.map(blog => <Blog key={blog.id} blog={blog} bookmarks={bookmarks} setBookmarks={setBookmarks}></Blog>)
      }
      </div>
      <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks}></Bookmarks>
    </div>
  )
}

Blogs.propTypes = {}

export default Blogs