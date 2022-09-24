import { Action } from "../types/action"
import { TodoItem } from "../types/todo"

export const todoReducer = (state: TodoItem[], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]

    case "REMOVE_TODO":
      return state.map((item) => {
        if (item.id == action.payload.id) {
          item.completed = true
          return item
        } else {
          return item
        }
      })

    default:
      return state
  }
}