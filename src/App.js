import { useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List </h1>

      <ListDemo />
    </>
  );
}

function ListDemo() {
  //c1: stateful variable
  let [list, setList] = useState(["delhi"]);

  //c2: action member function
  let addItemAction = () => {

  //cloning
  let newList = [...list, "mumbai"];
  console.log(newList);

  //DOM: TRIGGER DOM
  setList(newList);
};

  return (
    <>
      {/* c3: event binding */}
      <input type="button" value="Add New Item" onClick={addItemAction} />

      {/* c4: list */}
      {list.map((item) => (
        <h1> Hello {item}</h1>
      ))}
    </>
  );
}

export default App;
