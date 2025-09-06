import React , {useState , useContext}from 'react'
import Todocontext from './Todocontext';
import styles from './TodoApp.module.css'
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
    <div className={ styles.formTodoContainer}>
    <div>
        <input
      className={ styles.inputTodo}
       type="text" 
       value={text}
       onChange={(e)=> setText(e.target.value)}
       
       />
       <button
       className= {styles.formBtn}
        onClick={handleAdd}>Add</button>
    </div>
    </div>
  )
}

export default TodoForm
