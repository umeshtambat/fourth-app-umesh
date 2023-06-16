import { useRef, useState } from "react";
import MyTodo from "./pages/MyTodo.js";
import MyRegistration from "./pages/MyRegistration";

function App() {
  return (
    <>
      <MyTodo />
      <hr />
      <MyRegistration />
    </>
  );
}

export default App;
