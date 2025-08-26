import { Todo } from "../types/Todo";
import { useTodoStore } from "@/store";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { deleteTodo, completeTodo } = useTodoStore();

  return (
    <li data-testid="todo-item">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        data-testid="todo-text"
      >
        {todo.text}
      </span>
      <button data-testid="delete-button" onClick={() => deleteTodo(todo)}>
        Delete
      </button>
      <button data-testid="complete-button" onClick={() => completeTodo(todo)}>
        Complete
      </button>
    </li>
  );
}
