import React , {useContext} from 'react'
import Todocontext from './Todocontext'
import { TodoItem } from './TodoItem'
import styles from './TodoApp.module.css'
const TodoLists = () => {
  const {state} = useContext(Todocontext)
  return (
   <ul className={styles.ulTodo}>
    {
state.map((todo)=>(
  <TodoItem key={todo.id} todo={todo} />
))
    }
   </ul>
  )
}

export default TodoLists
