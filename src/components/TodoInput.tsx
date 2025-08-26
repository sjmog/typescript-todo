import { forwardRef } from "react";

interface TodoInputProps {
  onAddTodo: () => void;
}

const TodoInput = forwardRef<HTMLInputElement, TodoInputProps>(
  ({ onAddTodo }, ref) => {
    return (
      <>
        <label htmlFor="todo-input">Add a todo</label>
        <input id="todo-input" ref={ref} type="text" placeholder="Add a todo" />
        <button onClick={onAddTodo}>Add Todo</button>
      </>
    );
  }
);

export default TodoInput;
