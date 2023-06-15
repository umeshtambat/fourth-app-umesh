import { useRef, useState } from "react";
function App() {
  return (
    <>
      <h1>My Todo</h1>
      <MyTodo />
    </>
  );
}

function MyTodo() {
  // useState(100);
  // useState("Hello");
  // useState([]);
  // useState({});

  // let todo = {task: ""}
  let [todo, setTodo] = useState({ task: "" });

  let handleTaskAction = (e) => {
    // console.log(e.target);

    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };

  let addTodoAction = () => {
    alert(todo.task);
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Enter task"
        value={todo.task}
        onChange={handleTaskAction}
      />
      <input type="button" value="Add Todo" onAuxClick={addTodoAction}/>
    </>
  );
}

export default App;
