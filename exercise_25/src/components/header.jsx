import {  NavLink } from "react-router"
const Header = () => {
  return (
    <div >
<header className="flex justify-around pt-4 space-center bg-white shadow-md p-4">
    <h2 className="text-xl font-bold text-[#FF2056]">Recipe Book</h2>
    <nav className=" flex gap-4">
     <NavLink to='/' className={({isActive}) => isActive? 'text-[#FF2056]' : ''}>Home</NavLink>
     <NavLink to='/recipes' className={({isActive}) => isActive? 'text-[#FF2056]' : ''}>Recipes</NavLink>
     <NavLink to='/categories' className={({isActive}) => isActive? 'text-[#FF2056]' : ''}>categories</NavLink>
    </nav>
</header>
    </div>
  )
}

export default Header
