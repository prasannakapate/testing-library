import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has the correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toHaveStyle({ "background-color": "red" });
});

test("button turns to blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});
