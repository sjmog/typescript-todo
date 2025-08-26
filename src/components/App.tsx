import { useRef, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const todoInput = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const newTodo = todoInput.current?.value;

    if (newTodo) {
      setTodos([...todos, newTodo]);
      todoInput.current!.value = "";
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div data-testid="todo-items">
      {todos.map((todo, index) => (
        <div key={index} data-testid="todo-item">
          {todo}
          <button data-testid="delete-button" onClick={() => deleteTodo(index)}>
            Delete
          </button>
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
