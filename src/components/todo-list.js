const TodoList = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <input type="checkbox" checked={todo.completed} />
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
