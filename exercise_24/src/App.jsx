
import './App.css'
import {useForm} from 'react-hook-form'
function App() {

  const {register , handleSubmit , formState: {errors}} = useForm()
    console.log('erros', errors)
   
 const studentFormSubmit = (data) => {

  console.log('submmited', data)
 alert("Register seccussefully!\n " + JSON.stringify(data )  )
 }
  return (
  <div className='formContainer'>
    <h2>Student Registration Form</h2>
<form onSubmit={handleSubmit(studentFormSubmit) } className='form'> 
<div className='formFielFlex'>
  <label>Student name</label>
  <input 
    className='inputs'
  type="text"
  {...register('name', {required: 'name is required', minLength: {value: 3 , message: 'name must be at least 3 charactors.' } , pattern: { value:  /^[A-Za-z ]+$/ , message: 'Only letters and spaces allowed.'}})}
  />
  {errors.name && <p className='errors'>{errors.name.message}</p>}
</div>

<div className='formFielFlex'>
  <label>Student email</label>
  <input 
  className='inputs'
  type="email"
  {...register('email', {required: 'Email is required', pattern: {value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/
,
 message: 'Email is not validate.' }})}
  />
    {errors.email && <p className='errors'>{errors.email.message}</p>}
</div>
<div className='formFielFlex'>
  <label>Grade level</label>
  <select {...register('grade' , {required: 'choose your Grade'})}  className='selectioGrade'>
    <option value="">Select grade</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select>
  {errors.grade && <p className='errors'>{errors.grade.message}</p>}
</div>
<div className='formFielFlex'>
  <label >  Subjects Interest </label>

        <label>
            <input
   type="checkbox"
   {...register('subjects', {required: 'select one subject you interest'})}
   value="Math"
   />
        Mathematics
        </label>
        <label>
           <input
   type="checkbox"
   {...register('subjects')}
   value="Math"
   />
          Science
        </label>
        <label>
           <input
   type="checkbox"
   {...register('subjects')}
   value="Math"

   />
       English
        </label>
        {errors.subjects && <p className='errors'>{errors.subjects.message}</p>}
</div>
<button type='submit' className='fromBtn'>Submit</button>
</form>
  </div>
  )
}

export default App
