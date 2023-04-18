import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/loading";
import axios from "axios";
import TodoList from "./components/todo-list";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data);
      // console.table(result.data); //this duplicate de data, showing on the console to teh developer
    });
  }, []);

  return <div>{todos ? <TodoList todos={todos} /> : <Loading />}</div>;
}

export default App;
