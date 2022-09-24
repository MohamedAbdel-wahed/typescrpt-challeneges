import AddItem from './components/AddItem'
import TodoList from './components/TodoList'
import TodoContextProvider from './contexts/TodoContext'
import styles from './css/global.module.css'

export default function App() {

 return (
   <>
     <header>
       <h2>Simple Todo App</h2>
       <h3>(React / Typescript)</h3>
     </header>

     <TodoContextProvider>
       <main className={styles.container}>
         <AddItem />
         <TodoList />
       </main>
     </TodoContextProvider>
   </>
 )
}


