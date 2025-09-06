 import React , {useContext} from 'react'
import Todocontext from './Todocontext'
import styles from './TodoApp.module.css'
  export const TodoItem = ({todo}) => {
    const {dispatch} = useContext(Todocontext)
  return (
    <div>
    <li className={styles.listItemcontainer}>
        <span
      className={ todo.completed ? styles.completed:styles.inCompleted}
     
        onClick={()=> dispatch({type: 'completed', payload: todo.id},   )
  
    }
        >  {todo.completed ? "✔ " : "○ "}   {todo.text}</span>
        <button onClick={()=> dispatch({type:'delete', payload: todo.id})} className={styles.deletItemBtn}>delete</button>
        
    </li>
    </div>
  )
}

