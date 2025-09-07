import React , {useState , useContext}from 'react'
import Todocontext from './Todocontext';

const TodoForm = () => {
    const [text , setText] = useState('')
    const {dispatch} = useContext(Todocontext)

    const handleAdd = ()=> {
if(text.trim()) {
    const newTodo = {
        id: Date.now(), 
        text,
        completed: false
    }
    console.log('newTodo', newTodo)
    dispatch({type: 'add', payload: newTodo})
    setText('')
}
    }
  return (
    <div >
    <div>
        <input
        
   className=' rounded-sm border border-slate-300 px-2 text-sm py-1.5 mt-2  focus:outline-none focus:border-sky-300'
       type="text" 
       value={text}
       onChange={(e)=> setText(e.target.value)}
       placeholder='what is your task today?'
       />
       <button
   className='bg-indigo-500 ml-2 px-1.5 py-1 text-white rounded-sm cursor-pointer '
        onClick={handleAdd}>Add</button> 
    </div>
    </div>
  )
}

export default TodoForm
