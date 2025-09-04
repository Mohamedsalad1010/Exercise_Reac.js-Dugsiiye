import React ,{useReducer , useState}  from 'react'
import { initailState , reducer } from './Reducer'
import ContactForm from './ContactForm'
import ContactList from './ContactList'

const ContactApp = () => {
  const [state , dispatch] = useReducer(reducer, initailState)
  const [editContact , setEditContact] = useState(false)

  return ( 
    <div>
      <h2>Contact Management App</h2>
<ContactForm 
dispatch = {dispatch}
editContact = {editContact}
setEditContact ={setEditContact}

/>

<ContactList
contacts = {state}
dispatch = {dispatch}
setEditContact = {setEditContact}

/>
    </div>
  )
}

export default ContactApp
