import { Link , useParams} from "react-router"



 
const recipeDetails = () => {
 const {id} = useParams()
  const recipe = {
    
    id,
    title: 'Sample Recipe',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  };
console.log('id', id)
  return (
    <div className="bg-white shadow max-w-4xl mx-auto mt-8 p-4 rounded-md">
      <Link to= '/recipes' className="text-sm text-rose-600 ">   ← Back to Recipes</Link>
      <h2 className="text-xl my-4 font-bold"> {recipe.title} </h2>

      <div className="grid grid-cols-2">
<div>
  <h3 className="text-base font-bold mb-2">ingredients: </h3>
  <ul>
    {recipe.ingredients.map((recIng , index) => (
      <li key={index}  className="text-sm text-gray-700 mb-2">{recIng}</li>
    ))}
  </ul>
</div>

<div>
   <ul className="list-disc">
    <h3 className="text-base font-bold mb-2">instructions:</h3>
    {recipe.instructions.map((instru , index) => (
      <li key={index} className="text-sm text-gray-700 mb-2">{instru}</li>
    ))}
  </ul>
</div>
      </div>

    </div>
  )
}

export default recipeDetails
