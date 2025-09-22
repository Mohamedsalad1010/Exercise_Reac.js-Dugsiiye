import { Link } from "react-router"
const Home = () => {
  return (
    <div className="text-center mt-8">
       <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Book</h1>
         <p className="text-base text-gray-600 mb-8">
        Discover delicious recipes and start cooking today!
      </p>
      <div className="grid grid-cols-2 gap-6  max-w-2xl mx-auto">
       <Link to= '/recipes' className="bg-[#FF2056] p-4 rounded-md text-white  hover:bg-rose-700"> 
       <h2 className="text-2xl font-bold mb-2 ">Browse Recipes</h2>
          <p className="text-gray-100">Explore our collection of delicious recipes</p></Link>
          <Link to= '/categories' className="bg-[#FF2056] p-4 rounded-md text-white  hover:bg-rose-700"> 
          <h2 className="text-2xl font-bold mb-2">Recipe Categories</h2>
          <p className="text-gray-100">Find recipes by category</p></Link>
      </div>
    </div>
  )
}

export default Home
