import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from './PostContext'
import {Link , useLocation , useNavigate} from 'react-router'

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}
const Home = () => {
const {posts} = useContext(PostContext)
const location = useLocation()
const navigate = useNavigate()
const query = useQuery()
const searchTerm = query.get('search') || ''
  const [search , setSearch] = useState(searchTerm)

const filteredPost = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()) )

useEffect(()=> {
  if(search){
    navigate(`?search=${search}`)
  }
}, [search , navigate])

const handleSearch = (e) => {
e.preventDefault()

}

  return (
    <div >
    
    <div className='mt-6 bg-white shadow rounded p-4'>
       <h2 className='mt-2 font-bold text-base text-gray-700'>Blog Posts</h2>
      <div  >
      
          <input
          className=' block border-1 border-gray-400 p-1  rounded w-100'
           type="text" 
              placeholder="Search posts"
              value={search}
            onChange={(e) => setSearch(e.target.value)}
           
         
           />

           {/* <button className=' w-100 bg-[#615FFF] text-white text-sm p-1 rounded mt-4 cursor-pointer mb-2' type='submit'>Serach</button> */}
       
        
      </div>
     {
      filteredPost.length > 0 ? (
          filteredPost.map((post) => (
         <Link 
         to={`/posts/${post.id}`}
         className='block mb-2 font-bold text-[#615FFF] text-sm '
         >{post.title}</Link>
      ))
        
      ): <p className='text-rose-600 text-sm mt-2'>No posts Found </p>
    
     }
    </div>
    </div>
  )
}

export default Home
