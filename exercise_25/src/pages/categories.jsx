import { Link, Outlet ,  } from "react-router";

const categories = () => {
  const categories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right'
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Midday favorites'
  },
  {
    id: 'dinner',
    name: 'Dinner',
    description: 'Evening meals'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats'
  }
];
  return (

    <>
    <div className="bg-white shadow max-w-4xl mx-auto  mt-8 p-4">
      <h2 className="text-xl font-bold mb-2 ">Categories</h2>
      <div className=" space-y-2">
        {
          categories.map((category)=> (
         <Link
         to={`categories/${category.id}`}
          key={category.id} className=" block p-3 hover:bg-rose-50 hover:text-red-600 rounded-md ">
         <h2 className="text-base font-bold mt-2 ">{category.name}</h2>
         <p className="text-sm text-gray-600">{category.description}</p>
     
         </Link>

         
          ))
        }

       
      </div>
      
    </div>

    <div>
 <Outlet/>
    </div>
    </>
  )
}

export default categories
