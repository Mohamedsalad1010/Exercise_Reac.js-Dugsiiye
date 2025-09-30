import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { PostContext } from './PostContext'
const PostDetails = () => {
  const {posts} = useContext(PostContext)
  const {id} = useParams()
  const CurrentId = parseInt(id)
  const post = posts.find((p) => p.id === CurrentId)
  console.log(post)
  return (
    <div className='bg-white p-4 mt-4 rounded'>
      <h2 className='text-gray-700 font-bold text-xl mb-2 '>postDetails</h2>
      <h3 className='font-bold text-base '>{post.title}</h3>
      <p className='text-sm text-gray-500'>{post.content}</p>
    </div>
  )
}

export default PostDetails
