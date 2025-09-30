import React, { useContext } from 'react'
 import { AuthContext } from './AuthContext'
import { Navigate , useNavigate } from 'react-router'
const login = () => {
    const {isAuthenticated , login} = useContext(AuthContext)
 const navigate = useNavigate()
    if(isAuthenticated){
       return  <Navigate to= '/posts'/>
    }

    const handkeLogin = ()=> {
        login()
        navigate('/posts')
    }
  return (
    <div>
      <h2 className='mt-2 '>Click login Button to Access to Create Posts! </h2>
      <button onClick={handkeLogin} className='bg-[#615FFF] text-sm text-white py-1 px-4 rounded mt-2 cursor-pointer'>login</button>
    </div>
  )
}

export default login
