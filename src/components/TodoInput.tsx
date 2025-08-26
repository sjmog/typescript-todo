import { useRef } from "react";
import { useTodoStore } from "@/store";

const TodoInput = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const todoInput = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    const todoText = todoInput.current?.value;
    if (addTodo(todoText)) todoInput.current!.value = "";
  };

  return (
    <>
      <label htmlFor="todo-input">Add a todo</label>
      <input
        id="todo-input"
        ref={todoInput}
        type="text"
        placeholder="Add a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
};

export default TodoInput;
