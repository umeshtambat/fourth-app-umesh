function App() {
  return (
    <>
      <h1>Props Demo </h1>

      <ListDemo />
    </>
  );
}

function ListDemo() {
  let data = "Hello World";
  let list = ["DELHI", "CALCUTTA", "CHENNAI"];
  // for (let i = 0; i < 10; i++) {
  //   list.push("Hello Universe");
  // }

  console.log(list);
  return (
    <>
      {/* <h1>{data}</h1>
      <h1>{data}</h1>
      <h1>{data}</h1>
      <h1>{data}</h1>
      <h1>{data}</h1> */}

      <h1>{data}</h1>

      {list.forEach((item) => item)}
      {/* OUTPUT BCZ OF THIS */}
      {list.map((item) => item)}
    </>
  );
}

export default App;
