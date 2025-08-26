import { RenderResult, within } from "@testing-library/react";

const elements = {
  todoItems: (screen: RenderResult) => screen.queryAllByTestId("todo-item"),
  todoItem: (screen: RenderResult, index: number) =>
    elements.todoItems(screen)[index]!,
  todoText: (screen: RenderResult, index: number) =>
    within(elements.todoItem(screen, index)).getByTestId("todo-text"),
  todoInput: (screen: RenderResult) => screen.getByLabelText("Add a todo"),
  inputError: (screen: RenderResult) => screen.getByTestId("input-error"),
  addTodoButton: (screen: RenderResult) =>
    screen.getByRole("button", { name: "Add Todo" }),
  deleteButton: (screen: RenderResult, index: number) =>
    within(elements.todoItem(screen, index)).getByTestId("delete-button"),
  completeButton: (screen: RenderResult, index: number) =>
    within(elements.todoItem(screen, index)).getByTestId("complete-button"),
};

export default elements;
