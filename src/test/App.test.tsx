/// <reference types="@vitest/browser/context" />
import { test, expect, beforeEach } from "vitest";
import { userEvent } from "@vitest/browser/context";
import { render, RenderResult } from "@testing-library/react";
import App from "../components/App";

const todoItems = (screen: RenderResult) => screen.queryAllByTestId("todo-item");
const todoInput = (screen: RenderResult) => screen.getByLabelText("Add a todo");
const addTodoButton = (screen: RenderResult) => screen.getByRole("button", { name: "Add Todo" });

let screen: RenderResult;

beforeEach(() => {
  screen = render(<App />);
});

test("Todos start empty", async () => {
  expect(todoItems(screen)).toHaveLength(0);
});

test("Can add a todo", async () => {
  await userEvent.type(todoInput(screen), "First todo");
  await userEvent.click(addTodoButton(screen));

  expect(todoItems(screen)).toHaveLength(1);
  expect(todoItems(screen)[0]).toHaveTextContent("First todo");
});

test("Cannot add a blank todo", async () => {
  await userEvent.click(addTodoButton(screen));
  expect(todoItems(screen)).toHaveLength(0);
});

test("Input is cleared after adding a todo", async () => {
  await userEvent.type(todoInput(screen), "First todo");
  await userEvent.click(addTodoButton(screen));

  expect(todoInput(screen)).toHaveValue("");
});
