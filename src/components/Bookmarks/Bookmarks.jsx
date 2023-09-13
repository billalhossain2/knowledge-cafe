import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = ({bookmarks, setBookmarks}) => {
  const totalReadTime = bookmarks.reduce((prev, curr)=>prev+curr.read_time, 0)
  return (
    <div>
      <h3 className='text-[#6047EC] font-bold border-[1px] border-solid border-[#6047EC] py-3 px-5 rounded-md bg-[#f0ebeb] mb-6'>Spent time on read : {totalReadTime} min</h3>
      <div className='bg-[#ece8e8] p-5 space-y-5'>
      <h3 className='font-bold'>Bookmarked Blogs : {bookmarks.length}</h3>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
      </div>
    </div>
  )
}



export default Bookmarks