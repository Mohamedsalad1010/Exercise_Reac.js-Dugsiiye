import React , {useReducer} from 'react'
import { initailState , reducer } from './TodoRecuser'
import Todocontext from './Todocontext'
import TodoLists from './TodoLists'
import TodoForm from './TodoForm'
import styles from './TodoApp.module.css'
const TodoApp = () => {
    const [state , dispatch] = useReducer(reducer , initailState)
  return (
  <Todocontext.Provider value={{state , dispatch}}>
    <div className={ styles.todoAppContainer}>
<h2>Todo App with Reducer and Context</h2>
<TodoForm/>
<TodoLists/>

    </div>
  </Todocontext.Provider>
  )
}

export default TodoApp
