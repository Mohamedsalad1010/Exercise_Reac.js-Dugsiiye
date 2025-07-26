 import { useState } from "react"
function App() {
 
const [count , setCount] = useState(0)
const increasment = () => {
  setCount(count + 1)
}
const decreasment = () =>{
  if(count > 0){
    setCount(count - 1 )
    
     console.log("dec", count)
    return
  }
 
}
  return (
    <>
    <div>
      <h3>Count: {count}</h3>
      <button onClick={decreasment } disabled={count === 0}> decreament</button>
      <button onClick={increasment}>increasement</button>
    </div>
    </>
  )
}

export default App
