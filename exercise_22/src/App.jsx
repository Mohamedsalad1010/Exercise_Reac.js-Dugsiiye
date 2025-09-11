import {  useState } from 'react'


function App() {

const [inputs , setInputs] = useState({

  name: '',
  email: '',
  password: ''
})

const [ischecked , setIschecked] = useState(false)
const [selecOPtion , setSelectOption] = useState('')
const [showData , setShowData] = useState(null)
  
const handleChecked = (e) => {
setIschecked(e.target.checked)
}

const handleChanges = (e) => {
  const {name , value} = e.target
  setInputs((prev)=> ({...prev , [name]: value}))
} 
const handleSubmit = (e) => {
  e.preventDefault()
 const data = {
  ...inputs, 
  ischecked,
  selecOPtion,
 }
 setShowData(data)
 console.log('dta', data)
}
  return (
   <>
 <form  onSubmit={handleSubmit}>
<input 
type="text" name="name"
placeholder='enter name' 
value={inputs.name}
onChange={handleChanges}

/>
<input 
type="text" name="email"
placeholder='enter email' 
value={inputs.email}
onChange={handleChanges}
/>
<input 
type="password" name="password"
placeholder='enter password' 
value={inputs.password}
onChange={handleChanges}
/>
<label htmlFor="" 

>checked</label>
 <input type="checkbox" 

 checked={ischecked}
onChange={handleChecked} />

<select 
value={selecOPtion}
onChange={(e) => setSelectOption(e.target.value)}
>
  <option value="">select an option</option>
  <option value="option1">option1</option>
  <option value="option2">option2</option>

</select>

<button type='submit'>submit</button>
 </form>

{showData && (
  <div style={{paddingTop:' 50px '}}>
<strong>name: {showData.name} </strong>
<p>email: {showData.email}</p>
<span>password: {showData.password}</span>
<br/>
<span>checkbox: {showData.ischecked? 'true' : 'false'}</span>
<br/>
<span>option: {showData.selecOPtion}</span>

  </div>
)}

</>
  )
}

export default App
