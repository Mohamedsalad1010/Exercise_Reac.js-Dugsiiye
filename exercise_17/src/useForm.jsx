import React , {useState} from 'react'

const useForm = (inialValue) => {
    const [values , setValues] = useState(inialValue)
    
    const handleChange = (e)=>{
const {name , value } = e.target
setValues({
  ...values ,
  [name]: value
})
    }

  return   {values , handleChange}
  

}

export default useForm
