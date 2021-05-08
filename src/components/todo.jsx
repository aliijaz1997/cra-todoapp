import "../App.css";

export const TodoItem = (params) => {
  return (
    <div>
      <p>{params.todo.title}</p>
    </div>
  );
};
