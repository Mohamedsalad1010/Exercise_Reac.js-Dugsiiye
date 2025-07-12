import { useEffect , useState } from "react";

function Mouse () {


    const [mouseX , setMouseX] = useState({x: 0, y: 0})
  useEffect(() => {
const handleMouseMove = (e) => {
        setMouseX({x: e.clientX, y: e.clientY })
          console.log(mouseX)
    }
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        console.log("mouse clean")
    }

  })
    
    return (
        <div>
           
            <h2>Mousex : {mouseX.x}</h2>
            <h2>MouseY : {mouseX.y}</h2>
        </div>
    )
}
export default Mouse;