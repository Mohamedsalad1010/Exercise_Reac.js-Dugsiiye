import { createBrowserRouter } from "react-router"
import  App from "./App"
import Home from "./pages/Home"
import ReciepesList from "./pages/ReciepesList"
import Categories from "./pages/categories"
import RecipeDetails from "./pages/recipeDetails"
import CategoriesRecipes from "./pages/CategoriesRecipes"
  export const router =  createBrowserRouter([
    {
      path: '/',  
      element: <App/>,
      children: [

         {
      index : true,
      element: <Home/>
    },
    {
      path: '/recipes',
      element: <ReciepesList/>
    },
     {
      path: '/categories',
      element: <Categories/>,
      children: [
        {
          path: 'categories/:categoryId',
          element: <CategoriesRecipes/>
        }
      ]
     },
      {
         path: 'recipes/:id',
         element: <RecipeDetails/>
     }
      ]

      
    }, 
    
 ])



