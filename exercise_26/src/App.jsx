import { useState , useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import { AuthContext } from './AuthContext'

function App() {

  const {isAuthenticated , logOut} = useContext(AuthContext)

  const handleLogOut = () => {
logOut()
  }
  return (
 <div className=' min-h-screen bg-gray-200'>

<div className='max-w-4xl mx-auto pt-6 '>
  <h2 className=''>React Blog</h2>
  <nav className='flex  gap-8 shadow p-4 mt-4'>
    <NavLink  to= '/' className={({isActive}) => isActive ? 'bg-[#615FFF] text-white py-1 px-2 text-sm rounded cursor-pointer ' : undefined} >Home</NavLink>
   {
    !isAuthenticated &&(
       <NavLink  to= '/login' className={({isActive}) => isActive ? 'bg-[#615FFF] text-white py-1 px-2 text-sm rounded cursor-pointer ' : undefined} >login </NavLink>
    )
   }
    {
      isAuthenticated && (
        <div>
           <NavLink  to= '/posts' className={({isActive}) => isActive ? 'bg-[#615FFF] text-white capitalize py-1 px-2 text-sm rounded cursor-pointer ' : undefined}>Create Posts </NavLink>
           <button className='bg-rose-500 text-white ml-6 py-1 px-4 text-sm  rounded cursor-pointer' onClick={handleLogOut}>logout</button>
        </div>
         
      )
    }
  </nav>



    <main>
    <Outlet/>
  </main>
</div>


 </div>
 
  

 
  )
}

export default App
