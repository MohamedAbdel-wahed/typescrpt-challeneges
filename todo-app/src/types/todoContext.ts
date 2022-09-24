import { Action } from "./action"
import { TodoItem } from "./todo"

export type TodoContextInterface {
    todos: TodoItem[]
    dispatch: React.Dispatch<Action>
  }