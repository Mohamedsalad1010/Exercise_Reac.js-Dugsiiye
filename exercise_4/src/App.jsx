import { useState } from "react";



function App (){
  const [isOn , setIsON] = useState(true)
  const Toggle = () => {
setIsON(!isOn)
  }
  return (
    <>
   <p>The button Is {isOn ? "ON" : "OFF"} </p>
   <button onClick={Toggle}>Turn {isOn ? "Off" : "On"}</button>
    </>
  )
}

export default App; 