import { RenderResult } from "@testing-library/react";
import { userEvent } from "@vitest/browser/context";
import { elements } from "@/test";

const actions = {
  clickAddTodoButton: async (screen: RenderResult) => {
    await userEvent.click(elements.addTodoButton(screen));
  },
  addTodo: async (screen: RenderResult, todo: string) => {
    await userEvent.type(elements.todoInput(screen), todo);
    await actions.clickAddTodoButton(screen);
  },
  toggleCompleteTodo: async (screen: RenderResult, index: number) => {
    await userEvent.click(elements.completeButton(screen, index));
  },
  deleteTodo: async (screen: RenderResult, index: number) => {
    await userEvent.click(elements.deleteButton(screen, index));
  },
};

export default actions;
