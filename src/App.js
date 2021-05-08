import "./App.css";
import { useState } from "react";
import { TodoItem } from "./components/todo";
// Todo App
function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "JavaScript",
      done: false,
    },
    {
      id: 2,
      title: "Rust",
      done: false,
    },
  ]);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    const newTodo = {
      id: todos.length + 5,
      title: input,
      done: false,
    };
    const newArray = [...todos, newTodo];
    setTodo(newArray);
    setInput("");
  };
  const handleCompleted = (todo) => {
    console.log("clicked handle completed");
    console.log(todo);
    const newTodos = [...todos];
    const index = todos.indexOf(todo);
    newTodos[index].done = !newTodos[index].done;
    setTodo(newTodos);
  };
  const handleDelete = (todo) => {
    const index = todos.indexOf(todo);
    const newTodoss = todos.filter((result) => todos.indexOf(result) !== index);
    console.log(newTodoss);
    setTodo(newTodoss);
  };
  return (
    <div className="mx-5 ">
      <h1 className="is-size-3 has-text-weight-bold is-family-sans-serif has-text-centered">
        Todo App
      </h1>
      <input
        className="input is-info mt-5"
        value={input}
        type="text"
        placeholder="Enter the task to do"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={handleSubmit} className="button is-dark mt-2">
        Button
      </button>
      {todos.map((item, id) => (
        <div
          key={id}
          className="column is-two-fifths mt-3 has-background-grey has-text-white is-flex is-justify-content-space-between"
        >
          <TodoItem key={id} todo={item} />
          <div className="flex ">
            <button
              className="delete mr-2"
              onClick={() => {
                handleDelete(item);
              }}
            ></button>
            <input
              defaultChecked={item.done}
              type="checkbox"
              onClick={() => {
                handleCompleted(item);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
