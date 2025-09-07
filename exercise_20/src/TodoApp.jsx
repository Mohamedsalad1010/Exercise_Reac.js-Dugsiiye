import React , {useReducer} from 'react'
import { initailState , reducer } from './TodoRecuser'
import Todocontext from './Todocontext'
import TodoLists from './TodoLists'
import TodoForm from './TodoForm'

const TodoApp = () => {
    const [state , dispatch] = useReducer(reducer , initailState)
  return (
  <Todocontext.Provider value={{state , dispatch}}>
    <div className= 'bg-white p-8  mt-5 pl-10 pr-10  rounded-sm'>
<h2>Todo App with Reducer and Context</h2>
<TodoForm/>
<TodoLists/>

    </div>
  </Todocontext.Provider>
  )
}

export default TodoApp
