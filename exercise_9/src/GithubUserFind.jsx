import { use, useEffect , useState } from "react"



function GithubUserFind () {
    const [searchTerm , setSearchTerm] = useState("")
    const [userdata , setUserdata ]  = useState(null)
    const [isloading , setIsLoading] = useState(false)
    const [error , setError] = useState("")
 

    useEffect(() => {
        if(error){
             console.error('Error fetching GitHub user:', error);
        }
    },[error])
    const handleauserData =  async () => {
if(!searchTerm) return;
setIsLoading(true)
setSearchTerm("")
setUserdata(null)
setError(" ")
console.log("cleked")

try{

   
    await new Promise((resolve)=> setTimeout(resolve , 1000))
    const response = await fetch(`https://api.github.com/users/${searchTerm}  `)
    const data =  await response.json()
    console.log(data)
if(!response.ok){
throw new Error("GitHub user not found")
}
setUserdata(data)

console.log("userData", userdata)
}catch(error){
  setError(error.message)
}finally{
   setIsLoading(false) 
}

    }

   
    return(
        <div>
<h2>github User Search</h2>

<input 
type="text" 
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>
<button onClick={handleauserData}>Search</button>

<div>

    {isloading && <p>Loadin Data...</p>}

   {userdata && (
        <div style={{ marginTop: '1rem' }}>
          <h3>{userdata.name || useState.login}</h3>
          <img
            src={userdata.avatar_url}
            alt={userdata.login}
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <p>Location: {userdata.location || 'N/A'}</p>
          <p>Public Repos: {userdata.public_repos}</p>
        </div>
       
      )}
 <p style={{color:"red"}}>{error}</p>
</div>

        </div>
    )
}

export default GithubUserFind