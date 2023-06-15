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
    let inputElement = document.querySelector("#id1");
    let inputValue = inputElement.value;
    //cloning
    let newList = [inputValue, ...list ];
    console.log(newList);

    //DOM: TRIGGER DOM
    setList(newList);

    inputElement.value="";
  };

  return (
    <>
      {/* c3: event binding */}
      <input type="text" id="id1" placeholder="Whatsapp......" />
      <input type="button" value="Add Message" onClick={addItemAction} />

      {/* c4: list */}
      {list.map((item) => (
        <h1> {item}</h1>
      ))}
    </>
  );
}

export default App;
