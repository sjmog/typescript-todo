import { useRef, useState } from "react";
import { useTodoStore } from "@/store";

const TodoInput = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const todoInput = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState("");

  const handleAddTodo = () => {
    const todoText = todoInput.current?.value;
    if (!addTodo(todoText)) {
      setInputError("Todo cannot be blank");
    } else {
      todoInput.current!.value = "";
      setInputError("");
    }
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
      <p data-testid="input-error">{inputError}</p>
    </>
  );
};

export default TodoInput;
