import { test, expect } from "vitest";
import { render } from "vitest-browser-react";
import App from "../components/App";

test("App component renders", () => {
  const { getByText } = render(<App />);

  expect(getByText("App")).toBeInTheDocument();
});
