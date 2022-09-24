import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import styles from '../css/global.module.css';
import { TodoItem } from '../types/todo';
import { TodoContextInterface } from '../types/todoContext';

export default function TodoList(){
  const {todos,dispatch} = useContext<TodoContextInterface>(TodoContext)
  return (
    <ul>
      {todos.map((todo: TodoItem) => (
        <li onClick={()=> dispatch({
          type: "REMOVE_TODO",
          payload: todo 
        })} key={todo.id} className={todo.completed ? styles.completed : ""}>
          <h4 style={{ fontSize: '15px' }}>{todo.title}</h4>
          <p style={{ fontSize:'12px' }}>{todo.description}</p>
        </li>
      ))}
    </ul>
  )
}
