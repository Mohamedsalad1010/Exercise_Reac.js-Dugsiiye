import { Link } from "react-router";


 export const recipes = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'desserts'
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'dinner'
  },
  {
    id: 3,
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta cheese',
    category: 'lunch'
  },
  {
    id: 4,
    title: 'Breakfast Smoothie Bowl',
    description: 'Healthy and colorful breakfast bowl',
    category: 'breakfast'
  }
];

const selectCategory = recipes.find((cat)=> cat.category)
console.log('selectcat', selectCategory)

const ReciepesList = () => {
  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h2 className="text-3xl font-bold mb-6">All Recipes</h2>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3  ">
        {
            recipes.map((recipe) => (
                <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="bg-white shadow rounded-md p-4"> 
                   <h3 className="font-bold mb-2 text-gray-800">{recipe.title}</h3> 
                   <p className="text-sm text-gray-600 mb-2">{recipe.description}</p>
                   <span className="bg-rose-100 text-rose-600 py-1 px-2 rounded-sm text-sm">{recipe.category}</span>
                    
                 </Link>
            ))
        }
      </div>
    </div>
  )
}

export default ReciepesList
