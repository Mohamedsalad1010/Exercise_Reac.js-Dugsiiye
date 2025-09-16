import { useState } from 'react'
import './App.css'
function App() {

   const [formData , setFormDa] = useState({
    name: '',
    email: '',
    role: '',
    agreement: false,
    notification: false,
     skills : []
   })

   const skills = [
     'React', 'Javascript' , 'typescript' , 'Node.js' , 'Python' , 'Java', 'UI Design', 'Api Develoment' 
   ]
 const [errors , setErrors] = useState({})
 
   const validationHandle= () => {
    const validation = {};
   const nameValidation =  /^[A-Za-z\s]+$/
    if(!formData.name.trim() ){
    validation.name = "name is required"

    }
    else if(!nameValidation.test(formData.name) ){
 validation.name = 'name  is not validion '
    }
   else  if(formData.name.length < 2){
validation.name = ' name must 2 charactors.'
    }
  
    if(!formData.email.trim()){
      validation.email = 'email is required'
    }

    if(!formData.role.trim()){
      validation.role = 'select one role'
    }

     if(!formData.agreement === true){
      validation.agreement = 'must agreement the terms. '
    }
    if(formData.skills.length === 0){
      validation.skills = 'select one skill'
    }

 return validation
   }
    

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formDa' , formData)
  
  const validValue = validationHandle()
    console.log(Object.keys(validValue))

  if(Object.keys(validValue) === 0){
    console.log('succeesfull')
  }else{
    setErrors(validValue)
  }
  console.log ("validValue" , validValue)
   }


   const handleChange = (e) => {
    const {name , value ,type , checked } = e.target 
    const fieldValue =  type === 'checkbox' ? checked : value
    setFormDa((prev) => ({...prev , [name] : fieldValue}))

    setErrors((prev) => {
      const newErros = {...prev}
      const validitionError = validationHandle()

      if(validitionError[name]){
      newErros[name] = validitionError[name]
      } else{
        delete newErros[name]
      }

      return newErros
    })
   }


   const handleSkills = (e) => {
    const value = e.target.value
    setFormDa((prev) => {
      if(prev.skills.includes(value)){
      return  {...prev , skills: prev.skills.filter((skill) => skill !== value) }
      }else{
        return { ... prev , skills: [...prev.skills , value ]}
      }
    })
   }

 

  return (
  <>
  <div className='block justify-center items-center max-w-xl mx-auto bg-white shadow  p-6 md:p-4 mt-12 rounded-md '>
    <h2 className='text-center mb-4 font-bold text-xl text-gray-700'> Developer Application Form</h2>
    <form 
    onSubmit={handleSubmit} 
 
    >
<label
 className='block text-sm/6 font-medium text-gray-500'
>
  Full Name
   <input 
    className="block min-w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-black border-1 border-gray-300 placeholder:text-gray-500 focus:outline-[#C4B4FF] sm:text-sm/6 mt-2 mb-2 rounded-md"
  type="text"
name='name'
value={formData.name}
onChange={handleChange}
  />
{
  errors.name && ( <h2 className='error'>{errors.name}</h2>)
}
</label>
 
  <label   className='block text-sm/6 font-medium text-gray-500'>
    email
     <input 
 className="block min-w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-black border-1 border-gray-300 placeholder:text-gray-500 focus:outline-[#C4B4FF] sm:text-sm/6 mt-2 mb-2 rounded-md"
  type="email"
   name="email" 
   value={formData.email}
   onChange={handleChange}
   />
   {
  errors.email && ( <h2 className='error'>{errors.email}</h2>)
}
  </label>
 
   <label  className='block text-sm/6 font-medium text-gray-500'>
    Role
      <select
       className="block min-w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-black border-1 border-gray-300 placeholder:text-gray-500 focus:outline-[#C4B4FF] sm:text-sm/6 mt-2 mb-2 rounded-md"
      name="role" 
      value={formData.role}
      onChange={handleChange}
      >
        
    <option value="">select a role</option>
    <option value="frontend">Frontend Developer</option>
    <option value="backend">Backend Developer</option>
    <option value="design"> UI/UX Developer</option>
    <option value="fullStack"> FullStack Developer</option>
   
   </select>
   {
  errors.role && ( <h2 className='error'>{errors.role}</h2>)
}
   </label>
 
   <label  className='block text-sm/6 font-medium text-gray-500'>
    Skils
   
   </label>
   
   <div className='grid grid-cols-2 gap-2 mb-2' >
    {
  skills.map((skill , index)=> (
        <div key={index} className='text-sm'>
          
           <input
    
    type="checkbox"
    name='skills'
    value={skill}
    checked= {formData.skills.includes(skill)}
    onChange={handleSkills}
    />
    {skill}
           </div>
      ) )
    }

    {
  errors.skills && ( <h2 className='error'>{errors.skills}</h2>)
}
   </div>
 
   <label  className='block text-sm/6 font-medium text-gray-500'>

    <input
    
    type="checkbox"
name='agreement'
value={formData.agreement}
onChange={handleChange}

    />
     I agree the terms and conditions

     {
  formData && ( <h2 className='error'>{errors.agreement}</h2>)
}
     </label>


  <label className='block text-sm/6 font-medium text-gray-500' >
     <input
    type="checkbox"
  name='notification'
  value={formData.notification}
  onChange={handleChange}
    />
     Recieve new  notifications 
     
     {
  errors.notification && ( <h2 className='error'>{errors.notification}</h2>)
}
     </label>
 <div className='flex justify-center '>
   <button type='submit' className='bg-[#8E51FF] py-1.5 px-2  mt-2 rounded-md text-white text-sm w-full '>Submit Application</button>
 </div>
</form>
  </div>

  </>
  )
}

export default App
