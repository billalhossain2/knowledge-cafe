import React from 'react'
import PropTypes from 'prop-types'
import blogCoverImg from "../../assets/images/img-1.png";
import { FaBookmark } from 'react-icons/fa';
const Blog = props => {
  return (
    <div className='bg-[#f1eeee] p-3 space-y-3'>
      <img src={blogCoverImg} alt="cover image" />
      <div className='flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between lg:items-center md:items-center'>
        <div className='flex items-center gap-3'>
          <img className='w-10 h-10 rounded-full' src={blogCoverImg} alt="author image" />
          <div>
            <h3>Mr. Raju</h3>
            <p>Mar 14 (4 Days ago)</p>
          </div>
        </div>
        <div className='flex items-center gap-2'><span>05 min read</span> <FaBookmark></FaBookmark> </div>
      </div>
      <h1 className="text-4xl font-bold">How to get your first job as a self-taught programmer</h1>
      <p><span>#beginners</span> <span>#beginners</span></p>
      <p className='text-[#6047EC] font-bold'><button className='underline'>Mark as read</button></p>
    </div>
  )
}

Blog.propTypes = {}

export default Blog
