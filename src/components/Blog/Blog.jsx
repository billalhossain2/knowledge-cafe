import React from 'react'
import PropTypes, { object } from 'prop-types'
import blogCoverImg from "../../assets/images/img-1.png";
import Swal from 'sweetalert2';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, bookmarks, setBookmarks}) => {
  const {id, author_name, blog_title, cover_img, author_img, read_time, published_date, hash_tags} = blog;

  const handleAddBookmark = (blog)=>{
    const existBookmark = bookmarks.find(bookmark => bookmark.id === blog.id);
    if(existBookmark){
    return Swal.fire('You have alreay bookmarked this blog!')
    }


    setBookmarks([...bookmarks, blog])
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Bookmarked',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className='bg-[#f1eeee] p-3 space-y-3'>
      <img className='w-full h-80' src={cover_img} alt="cover image" />
      <div className='flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between lg:items-center md:items-center'>
        <div className='flex items-center gap-3'>
          <img className='w-10 h-10 rounded-full' src={author_img} alt="author image" />
          <div>
            <h3>{author_name}</h3>
            <p>{published_date}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'><span>{read_time}</span> <span>min read</span> <FaBookmark></FaBookmark> </div>
      </div>
      <h1 className="text-4xl font-bold">{blog_title}</h1>
      <p>{
        hash_tags.map((hash, index) =><span className='mx-2' key={index}>#{hash}</span>)
        }</p>
      <p className='text-[#6047EC] font-bold'><button onClick={()=>handleAddBookmark(blog)} className='underline'>Mark as read</button></p>
    </div>
  )
}

Blog.propTypes = {
  blog:object
}

export default Blog
