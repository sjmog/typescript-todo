/// <reference types="@vitest/browser/context" />
import { test, expect, beforeEach } from "vitest";
import { userEvent } from "@vitest/browser/context";
import { render, RenderResult, within } from "@testing-library/react";
import App from "../components/App";

const elements = {
  todoItems: (screen: RenderResult) => screen.queryAllByTestId("todo-item"),
  todoInput: (screen: RenderResult) => screen.getByLabelText("Add a todo"),
  addTodoButton: (screen: RenderResult) =>
    screen.getByRole("button", { name: "Add Todo" }),
  deleteButton: (screen: RenderResult, index: number) =>
    screen.getByRole("button", { name: "Delete" }),
};

const actions = {
  clickAddTodoButton: async (screen: RenderResult) => {
    await userEvent.click(elements.addTodoButton(screen));
  },
  addTodo: async (screen: RenderResult, todo: string) => {
    await userEvent.type(elements.todoInput(screen), todo);
    await actions.clickAddTodoButton(screen);
  },
};

let screen: RenderResult;

beforeEach(() => {
  screen = render(<App />);
});

test("Todos start empty", async () => {
  expect(elements.todoItems(screen)).toHaveLength(0);
});

test("Can add a todo", async () => {
  await actions.addTodo(screen, "First todo");

  expect(elements.todoItems(screen)).toHaveLength(1);
  expect(elements.todoItems(screen)[0]).toHaveTextContent("First todo");
});

test("Cannot add a blank todo", async () => {
  await actions.clickAddTodoButton(screen);

  expect(elements.todoItems(screen)).toHaveLength(0);
});

test("Input is cleared after adding a todo", async () => {
  await actions.addTodo(screen, "First todo");

  expect(elements.todoInput(screen)).toHaveValue("");
});

test("A todo is removed when the delete button is clicked", async () => {
  await actions.addTodo(screen, "First todo");
  await userEvent.click(elements.deleteButton(screen, 0));

  expect(elements.todoItems(screen)).toHaveLength(0);
});
