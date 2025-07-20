import UserList from "./UserList";

import { useState } from "react";


function App () {
const  userList = [
  {id: 1 ,   name: "mohamed", email: "moham@gmail.com", role: "Admin"},
   { id: 2 , name: "cali", email: "cali@gmail.com", role: "securty"},
    { id: 3 , name: "farxaan", email: "farxan@gmail.com", role: "washiner"}
]
  return (
    <>
    <UserList
  users = {userList}
   
    />
    
    </>
  )
}

export default App ;
