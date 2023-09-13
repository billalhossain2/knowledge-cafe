import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = props => {
  return (
    <div>
      <h3 className='text-[#6047EC] font-bold border-[1px] border-solid border-[#6047EC] py-3 px-5 rounded-md bg-[#f0ebeb] mb-6'>Spent time on read : 177 min</h3>
      <div className='bg-[#ece8e8] p-5 space-y-5'>
      <h3 className='font-bold'>Bookmarked Blogs : 8</h3>
      <Bookmark></Bookmark>
      <Bookmark></Bookmark>
      <Bookmark></Bookmark>
      <Bookmark></Bookmark>
      <Bookmark></Bookmark>
      </div>
    </div>
  )
}

Bookmarks.propTypes = {}

export default Bookmarks