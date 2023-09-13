import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  return (
    <div className='bg-[#fff] p-5 rounded-md font-semibold lg:max-w-[351px]'>{bookmark.blog_title}</div>
  )
}

Bookmark.propTypes = {}

export default Bookmark