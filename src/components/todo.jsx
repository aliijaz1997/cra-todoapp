import "../App.css";

export const TodoItem = (params) => {
  return (
    <div data-testid="todo-title">
      <p>{params.todo.title}</p>
    </div>
  );
};
