import Usercard from "./UserCard";

function App () {
  let UserName = "mohamed"
  let UserEmail = "mc2000@gmail.com"
return (
  <>
  <Usercard 
  UserName = {UserName}
  UserEmail = {UserEmail}
  />

   <Usercard 
  UserName = {UserName = "cali"}
  UserEmail = {UserEmail = "mohamed@gmail.com"}
  />
  </>
)
}

export default App; 