import React from 'react'


const ContactItem = ( { contact , dispatch , setEditContact}) => {
  return (
    <div>
    <li >
        <strong>name : {contact.name} {contact.favorite && '★'}</strong>
        <p>email: {contact.email}</p>
        <p>phone: {contact.phone}</p>
        <button onClick={() =>dispatch({ type : 'toggleFavorite' , payload: contact.id})}>{contact.favorite? "unfavorite" : 'favorite'}</button>
        <button onClick={()=> dispatch({type: 'delete' , payload: contact.id})}>delete</button>
        <button onClick={()=> setEditContact(contact)}>upadate</button>
    </li>
    </div>
  )
}

export default ContactItem
