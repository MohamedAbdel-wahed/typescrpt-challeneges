import { TodoItem } from "./todo";

export interface Action {
    type: string,
    payload: TodoItem
}