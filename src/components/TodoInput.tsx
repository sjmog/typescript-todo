import { useState, useMemo } from "react";
import { useTodoStore } from "@/store";

const TodoInput = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [inputError, setInputError] = useState<string | null>(null);
  const [newTodo, setNewTodo] = useState<string>("");

  const isInputValid: boolean = useMemo(() => !!newTodo?.trim(), [newTodo]);

  const handleAddTodo = () => {
    if (!isInputValid) {
      setInputError("Todo cannot be empty");
      return;
    }

    addTodo(newTodo);
    setNewTodo("");
    setInputError(null);
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
