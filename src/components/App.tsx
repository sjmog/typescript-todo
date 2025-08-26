import { useRef, useState } from "react";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoInput = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const newTodo = todoInput.current?.value;

    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      todoInput.current!.value = "";
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const completeTodo = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <main>
      <ul data-testid="todo-items">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            onDelete={deleteTodo}
            onComplete={completeTodo}
          />
        ))}
      </ul>
      <TodoInput ref={todoInput} onAddTodo={addTodo} />
    </main>
  );
}
