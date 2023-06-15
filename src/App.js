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
  let [todo, setTodo] = useState({ task: "", description: "" });
  let handleChnageTaskAction = (e) => {
    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };
  let handleChangeDescriptionAction = (e) => {
    // console.log(e.target);
    let newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  };

  let addTodoAction = () => {
  let addTodoAction = async () => {
    console.log(todo);
    // TODO :: Save this do DB

    let url = `http://localhost:4000/addtodo?task=${todo.task}&description=${todo.description}`;
    await fetch(url);
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Enter task"
        value={todo.task}
        onChange={handleChnageTaskAction}
      />
      <textarea
        className="form-control"
        cols="30"
        rows="3"
        placeholder="Enter Description"
        value={todo.description}
        onChange={handleChangeDescriptionAction}
      ></textarea>
      <input type="button" value="Add Todo" onClick={addTodoAction} />
    </>
  );
}
}
export default App;