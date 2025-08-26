import { TodoItem, TodoInput } from "@/components";
import { useTodoStore } from "@/store";

export default function App() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <main>
      <ul data-testid="todo-items">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoInput />
    </main>
  );
}
