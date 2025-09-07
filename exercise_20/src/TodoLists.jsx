import React , {useContext} from 'react'
import Todocontext from './Todocontext'
import { TodoItem } from './TodoItem'

const TodoLists = () => {
  const {state} = useContext(Todocontext)
  return (
   <ul >
    {
state.map((todo)=>(
  <TodoItem key={todo.id} todo={todo} />
))
    }
   </ul>
  )
}

export default TodoLists
