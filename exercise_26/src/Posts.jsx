import React , {useContext, useState}from 'react'
import { PostContext } from './PostContext'
import { useNavigate } from 'react-router'
const Posts = () => {
const [createPost ,  setCreatePost] = useState({
    title: '',
    content: ''
}

)

const {addPost} = useContext(PostContext)
console.log("postData", {addPost})
const navigate = useNavigate()

const handleChange = (e) => {
    const {name , value} = e.target
    setCreatePost((prev) => ({...prev , [name] : value} ))
}

const handleSubmit = (e) => {
e.preventDefault()
 addPost(createPost)
navigate('/')
}
  return (
    
    <div className='mt-6 bg-white shadow rounded p-4'>
      <h2> create a New Post</h2>
      <form onSubmit={handleSubmit}
      className='mt-6' >
        <label >title:</label>
        <input 
        className='border-1 border-gray-400 rounded'
        type="text" name="title" 
        value={createPost.title}
        onChange={handleChange}
        required
        />
        <br></br>
        <label >Content:</label>
        <textarea
         name="content"
           className=' border-1 border-gray-400 rounded mt-6'
           value={createPost.content}
           onChange={handleChange}
           required
         ></textarea>
        <button className='block bg-[#615FFF] w-100 py-1 px-4 text-white mt-4 mb-2 cursor-pointer rounded ml-6' type='submit'>Create Post</button>
      </form>

      
    </div>
  )
}

export default Posts
