import React from 'react'
import PropTypes from 'prop-types'
import Bookmarks from '../Bookmarks/Bookmarks'
import Blog from '../Blog/Blog'
const Blogs = props => {
  return (
    <div className='flex lg:flex-row flex-col mt-10 gap-5 mb-10'>
      <div className='flex-1 space-y-10'>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
      </div>
      <Bookmarks></Bookmarks>
    </div>
  )
}

Blogs.propTypes = {}

export default Blogs