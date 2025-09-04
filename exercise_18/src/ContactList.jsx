import React from 'react'
import ContactItem from './ContactItem'
const ContactList = ({contacts , dispatch , setEditContact}) => {

  return (
    <div>
     <h3>Contacts</h3>
     {
        contacts.length > 0 ? (
            <ul>
               
              {
                contacts.map((contact) => (
                    <ContactItem
                    key={contact.id}
                    contact = {contact}
                    dispatch = {dispatch}
                    setEditContact ={ setEditContact}
                    />
                ))
              }
            </ul>
        ): 'no contacts'
     } 
    </div>
  )
}

export default ContactList
