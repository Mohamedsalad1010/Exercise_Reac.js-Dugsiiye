import { useState , useReducer } from 'react'

const initialState = {
  step:  1 ,
  firstName: "",
  lastName: "",
  email: "",
  phone: ""
}

const reducer = (state , action) => {
 switch(action.type){
  case 'Update-Field':
    return { ...state, [action.field] : action.value}
    case 'next-step':
      return {...state , step: state.step +1 }
      case 'preview':
        return { ...state , step: state.step -1}
       
        case 'reset-Form':
          return initialState
          default: 
          return state

 }

}

function App() {

 const [state, dispatch] = useReducer(reducer, initialState);


 const handleChane = (e) => {

  dispatch({
    type: "Update-Field",
    field: e.target.name,
    value: e.target.value
  })

 }

 const nextStepValidation = () => {
 

  dispatch({ type:"next-step"})
 }

 const nextStep = () =>{
   if(state.step === 1) {
    if(!state.firstName.trim() || !state.lastName.trim()){
      alert(" fill field!")
      return
    }
  }
  if(state.step === 2){
    if(!state.email.trim() || !state.phone.trim()){
      alert(" fill field!")
      return
    }
  }
  dispatch({type: "next-step"})}
 const preview = () => dispatch({type: "preview"})
 const resetForm = () => dispatch({type: "reset-Form"})

 const handleSubmit = ( ) => {
  alert("form submitted!")
  resetForm()
 }
  return (
 
   <div>
     <h2>Multi-Step Registration</h2>
     {
      state.step === 1 && (
      <div> 
  <h3>Step 1: Profile</h3>
        <label> firstName</label>
        <input
         type="text"
         name='firstName'
         value={state.firstName}
         onChange={handleChane}
         
         />
         <br/>
         <label> lastName</label>
        <input
         type="text"
         name='lastName'
         value={state.lastName}
         onChange={handleChane}
         
         />
         <br/>
         <button onClick={nextStep}>Next</button>

      </div>
      )
     }

     {
    state.step === 2 && (
      <div> 
         <h3>Step 2: Contect Form</h3>
        <label> email:</label>
        <input
         type="text"
         name='email'
         value={state.email}
         onChange={handleChane}
         
         />
         <br/>
         <label> phone:</label>
        <input
         type="text"
         name='phone'
         value={state.phone}
         onChange={handleChane}
         
         />
         <br/>
         <button onClick={preview}>Back</button>
         <button onClick={nextStep}>Next</button>

      </div>
    )
     }

     {
       state.step === 3 && (
        <div>
        <h3>Step 3: Review</h3>
        
        <p>  <strong>firstName:</strong> {state.firstName}</p>
        <p>  <strong>lastName:</strong> {state.lastName}</p>
        <p>  <strong>email:</strong> {state.email}</p>
        <p>  <strong>phone:</strong> {state.phone}</p>
       
        <button onClick={preview}>Back</button>
        <button onClick={handleSubmit}>Comfirm</button>

        
         </div>
       )
     }

   </div>
 
  )
}

export default App
