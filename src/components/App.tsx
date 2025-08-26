import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { useTodoStore } from "../store/store";

export default function App() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <main>
      <ul data-testid="todo-items">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
      <TodoInput />
    </main>
  );
}
