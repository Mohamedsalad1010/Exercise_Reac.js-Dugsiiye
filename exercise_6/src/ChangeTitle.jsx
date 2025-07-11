import { useEffect , useState } from "react";

const ChangeTitle = () =>{
const [name , setName] = useState("")
const [greeting , setGreeting] = useState("Assallaamu Calaykum:")

 useEffect (()=> {
     if(!name){
    document.title = "welcome"
    return
 }else{
    document.title = `${greeting} , ${name}`
 }
 console.log("name", name)
 console.log("cre", greeting)
   
 },[name])

    return (
        <>
     <div>
<input type="text" 

value={name}
onChange={(e) => setName(e.target.value) }
/>

<input type="text" 
value={greeting}
onChange={(e) => setGreeting(e.target.value)}
/>

     </div>
        
        </>
    )
}

export default ChangeTitle