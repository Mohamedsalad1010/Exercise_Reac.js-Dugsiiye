import { Link, useParams } from "react-router";


const allRecipes = [
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
  },
  {
    id: 5,
    title: 'Tiramisu',
    description: 'Classic Italian coffee-flavored dessert',
    category: 'desserts'
  }
];
const CategoriesRecipes = () => {
    const {categoryId} = useParams()
    console.log('caID', categoryId)
    const recipes = allRecipes.filter( recipe => recipe.category === categoryId)
    console.log('carecipe', recipes)
  return (
    <div  className="bg-white shadow max-w-4xl mx-auto mt-8 p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4 capitalize"> {categoryId} Recipe</h2>
      <div className="grid gap-6">
        {
            recipes.map((recipe) => (
               <Link
               key={recipe.id}
               to={`/recipes/${recipe.id}`} 
               className=" block p-4 rounded-md border border-gray-400 hover:border-b-rose-400 hover:border-r-red-400 transition-colors ">
               <h2 className="font-bold mb-2 text-gray-800">{recipe.title}</h2>
               <p className="text-sm text-gray-600 mb-2">{recipe.description}</p>
               </Link>
            ))
        }
      </div>
    </div>
  )
}

export default CategoriesRecipes
