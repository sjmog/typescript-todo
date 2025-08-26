import { Todo } from "../types/Todo";

interface TodoItemProps {
  index: number;
  todo: Todo;
  onDelete: (index: number) => void;
  onComplete: (index: number) => void;
}

export default function TodoItem({
  index,
  todo,
  onDelete,
  onComplete,
}: TodoItemProps) {
  return (
    <li data-testid="todo-item">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        data-testid="todo-text"
      >
        {todo.text}
      </span>
      <button data-testid="delete-button" onClick={() => onDelete(index)}>
        Delete
      </button>
      <button data-testid="complete-button" onClick={() => onComplete(index)}>
        Complete
      </button>
    </li>
  );
}
