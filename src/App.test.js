import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { TodoItem } from "./components/todo";
test("renders to check title of the app", () => {
  render(<App />);
  const linkElement = screen.getByText(/todo app/i);
  expect(linkElement).toBeInTheDocument();
});

test("to check the button to be clicked once", () => {
  const handleSubmit = jest.fn();
  render(<button onClick={handleSubmit}>Button</button>);
  fireEvent.click(screen.getByText(/button/i));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test("to check the div element in the todoItem func", () => {
  const item = {
    title: "Ali",
  };
  const { getByTestId } = render(<TodoItem todo={item} />);
  expect(getByTestId("todo-title")).toBeInTheDocument();
});
