import React , {useState , useEffect}from 'react'
import { use } from 'react'

const ContactForm = ({dispatch , editContact , setEditContact}) => {
const [contact , setContact] = useState( editContact || { id: null, name: '', email: '', phone: ''})
const [isEdit , setIsEdit ] = useState(false)

  useEffect(() => {
    if (editContact) {
      setContact(editContact);
      setIsEdit(true);
    }
  }, [editContact]);

const handleChange = (e) =>{
const {name , value} = e.target;
setContact({...contact , [name] : value})
}

const handleSubmit = (e) =>{
e.preventDefault()
if(contact.name && contact.email && contact.phone){
    if(isEdit){
    dispatch({type: 'edit' , payload: contact})
    setIsEdit(false)
    }else{
        const newContact = { ...contact, id: Date.now(), favorite: false }
dispatch({type: 'add',  payload: newContact  })
console.log('add', newContact)
}
}
 setContact({ id: null, name: '', email: '', phone: '' });

}

const handleEditCancel = () =>{
    setContact({id: null ,name: '' , email: '', phone: ''} )
    setIsEdit(false)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <h3>{isEdit ? 'Edit Contact' : 'Add New Contact'}</h3>
       <label>
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </label>
           <label>
          Email:
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </label>
           <label>
          phone:
          <input
            type="number"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </label>



<button type='submmit'>{isEdit? 'update': 'add'}</button>
 {isEdit && <button onClick={handleEditCancel}>cencel</button>}
      </form>
    </div>
  )
}

export default ContactForm
