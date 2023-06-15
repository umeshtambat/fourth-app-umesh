import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List </h1>

      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["delhi"]);

  let addItemAction = () => {
    console.log(inputRef.current);
    //cloning
    //let newList = [inputValue, ...list];

   
    //DOM: TRIGGER DOM
    let inputValue = inputRef.current.value;
    let newList = [inputValue, ...list];

    setList(newList);

    inputRef.current.value = "";
  };

  return (
    <>
      {/* c3: event binding */}
      <input type="text" i="id1" ref={inputRef} placeholder="Whatsapp......" />
      <input type="button" value="Add Message" onClick={addItemAction} />

      {/* c4: list */}
      {list.map((item) => (
        <div>
          <h1> {item}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quidem
            voluptatem, eligendi sint consectetur temporibus omnis nisi
            reiciendis distinctio modi, et unde sequi ea aspernatur!
            Reprehenderit nobis sequi quod eligendi?
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
