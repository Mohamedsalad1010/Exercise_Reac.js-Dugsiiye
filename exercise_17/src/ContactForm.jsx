import useForm from "./useForm";



const ContactForm = () => {
    const {values , handleChange} = useForm({
        name: '',
        email: '',
        phone: ''
        
    })
    const handleSubmit = (e)=>{
e.preventDefault();
console.log('formsubmit' , values)
    }
  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
<div>
  <label htmlFor="name">Name</label>
  <input type="text" name="name" 
  value={values.name}
  onChange={handleChange}
  />
</div>
<div>
  <label htmlFor="email">Name</label>
  <input type="email" name="email" 
  value={values.email}
  onChange={handleChange}
  />
</div>
<div>
  <label htmlFor="email">phone:</label>
  <input type="number" name="phone" 
  value={values.phone}
  onChange={handleChange}
  />
</div>
<button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
