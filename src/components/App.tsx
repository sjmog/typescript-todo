import { useRef, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const todoInput = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const newTodo = todoInput.current?.value;
    newTodo && setTodos([...todos, newTodo]);
  };

  return (
    <div data-testid="todo-items">
      {todos.map((todo, index) => (
        <div key={index} data-testid="todo-item">
          {todo}
        </div>
      ))}
      <label htmlFor="todo-input">Add a todo</label>
      <input
        id="todo-input"
        ref={todoInput}
        type="text"
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
