import { useReducer,createContext, useEffect } from "react";
import { todoReducer } from "../reducers/todoReducer";
import { ContextProviderProps } from "../types/contextProviderProps";
import { TodoContextInterface } from "../types/todoContext";



export const TodoContext = createContext<TodoContextInterface>({todos: [], dispatch: ()=>{}})


const TodoContextProvider = ({children}: ContextProviderProps) => {  

  const [todos,dispatch]= useReducer(todoReducer,[],()=> {
    let localData: any= localStorage.getItem('todos')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])


  return (
    <TodoContext.Provider value={{todos, dispatch}}>
    {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider