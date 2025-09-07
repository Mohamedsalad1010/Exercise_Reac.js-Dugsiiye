 import React , {useContext} from 'react'
import Todocontext from './Todocontext'

  export const TodoItem = ({todo}) => {
    const {dispatch} = useContext(Todocontext)
  return (
    <div>
    <li  className='bg-gray-100 mt-2 p-2 border border-gray-300 rounded-sm flex display: flex; justify-between text-sm '>
        <span
      
     className={`${todo.completed ? "bg-green-50 line-through text-slate-400" : ""}`}
             onClick={()=> dispatch({type: 'completed', payload: todo.id},   )
  
    }
        >   {todo.text}</span>
        <button
        className='text-red-500 cursor-pointer'
        onClick={()=> dispatch({type:'delete', payload: todo.id})} >delete</button>
        
    </li>
    </div>
  )
}

