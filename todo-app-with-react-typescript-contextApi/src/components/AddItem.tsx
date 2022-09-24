import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../contexts/TodoContext"
import { TodoItem } from "../types/todo"

const defaultTodo= {id: 0, title: "", description: "", completed: false}

export default function AddItem() {
  const { dispatch } = useContext(TodoContext)

  const [btnDisabled, setBtnDisabled] = useState<boolean>(true)
  const [todoItem, setTodoItem] = useState<TodoItem>(defaultTodo)

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault()

    dispatch({
      type: "ADD_TODO",
      payload: { ...todoItem, id: Math.random() },
    })

    setTodoItem(() => defaultTodo)
  }

  useEffect(() => {
    if (!todoItem.title.trim() || !todoItem.description.trim()) {
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
    }
  }, [todoItem])

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        onChange={(e) => setTodoItem({ ...todoItem, title: e.target.value })}
        value={todoItem.title}
        placeholder="Enter Todo Title"
      />
      <textarea
        rows={2}
        onChange={(e) =>
          setTodoItem({ ...todoItem, description: e.target.value })
        }
        value={todoItem.description}
        placeholder="Enter Todo Description"
      ></textarea>

      <button type="submit" disabled={btnDisabled}>
        Add
      </button>
    </form>
  )
}