import { useState } from "react";
import { useTodoStore } from "@/store";

const TodoInput = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [inputError, setInputError] = useState<string | null>(null);
  const [newTodo, setNewTodo] = useState<string>("");

  const isInputValid: boolean = !!newTodo;

  const handleAddTodo = () => {
    if (!addTodo(newTodo)) {
      setInputError("Todo cannot be blank");
    } else {
      setNewTodo("");
      setInputError(null);
    }
  };

  return (
    <>
      <label htmlFor="todo-input">Add a todo</label>
      <input
        id="todo-input"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        placeholder="Add a todo"
      />
      <button disabled={!isInputValid} onClick={handleAddTodo}>
        Add Todo
      </button>
      <p data-testid="input-error">{inputError}</p>
    </>
  );
};

export default TodoInput;
