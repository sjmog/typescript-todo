import { create } from "zustand";
import { Todo } from "@/types";

interface TodoStore {
  globalId: number;
  todos: Todo[];
  addTodo: (text: string | undefined) => boolean;
  deleteTodo: (todo: Todo) => void;
  completeTodo: (todo: Todo) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  globalId: 1,
  todos: [],
  addTodo: (text: string | undefined) => {
    if (!text || text.trim() === "") return false;

    set((state) => ({
      todos: [...state.todos, { id: state.globalId, text, completed: false }],
      globalId: state.globalId + 1,
    }));

    return true;
  },
  deleteTodo: (todo: Todo) => {
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== todo.id),
    }));
  },
  completeTodo: (todo: Todo) => {
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === todo.id ? { ...t, completed: true } : t
      ),
    }));
  },
}));
