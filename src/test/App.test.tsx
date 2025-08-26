/// <reference types="@vitest/browser/context" />
import { test, expect, beforeEach } from "vitest";
import { render, RenderResult } from "@testing-library/react";
import { App } from "@/components";
import { elements, actions } from "@/test";

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
  expect(elements.todoText(screen, 0)).toHaveTextContent("First todo");
});

test("Input button is disabled when adding a blank todo", async () => {
  expect(elements.addTodoButton(screen)).toBeDisabled();
});

test("Input button is enabled when adding a valid todo", async () => {
  await actions.typeTodoInput(screen, "First todo");
  expect(elements.addTodoButton(screen)).toBeEnabled();
});

test("Input error is shown when adding a blank todo", async () => {
  await actions.addTodo(screen, "   ");
  expect(elements.inputError(screen)).toBeVisible();
  expect(elements.inputError(screen)).toHaveTextContent("Todo cannot be blank");
});

test("Input error disappears when a valid todo is added", async () => {
  await actions.typeTodoInput(screen, "   ");
  await actions.clickAddTodoButton(screen);
  expect(elements.inputError(screen)).toHaveTextContent("Todo cannot be blank");

  await actions.addTodo(screen, "First todo");
  expect(elements.inputError(screen)).not.toBeVisible();
});

test("Input is cleared after adding a todo", async () => {
  await actions.addTodo(screen, "First todo");

  expect(elements.todoInput(screen)).toHaveValue("");
});

test("A todo is removed when the delete button is clicked", async () => {
  await actions.addTodo(screen, "First todo");
  await actions.deleteTodo(screen, 0);

  expect(elements.todoItems(screen)).toHaveLength(0);
});

test("A todo is strikethrough when it is completed", async () => {
  await actions.addTodo(screen, "First todo");

  expect(elements.todoText(screen, 0)).not.toHaveStyle({
    textDecoration: "line-through",
  });

  await actions.toggleCompleteTodo(screen, 0);

  expect(elements.todoText(screen, 0)).toHaveStyle({
    textDecoration: "line-through",
  });
});

test("A todo can be uncompleted", async () => {
  await actions.addTodo(screen, "First todo");
  await actions.toggleCompleteTodo(screen, 0);
  expect(elements.completeButton(screen, 0)).toHaveTextContent("Uncomplete");
  await actions.toggleCompleteTodo(screen, 0);

  expect(elements.todoText(screen, 0)).not.toHaveStyle({
    textDecoration: "line-through",
  });
  expect(elements.completeButton(screen, 0)).toHaveTextContent("Complete");
});
