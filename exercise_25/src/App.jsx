 import { Outlet } from "react-router"
import Header from "./components/header"
function App() {


  return (
   <>
   <div className="bg-gray-100 min-h-screen ">
<Header/>

<main>
<Outlet/>
</main>
   </div>
  

   </>
  )
}

export default App
