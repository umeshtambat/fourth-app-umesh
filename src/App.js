function App() {
  return (
    <>
      <h1>Props Demo </h1>

      {/* <MessageDemo />
    <MessageDemo message="Hello"/> */}
      <MessageDemo name="umesh" email="u@gmail.com" />
      <MessageDemo name="vaibhav" email="v@gmail.com" />
      <MessageDemo name="tushar" email="t@gmail.com" />
    </>
  );
}

//how to make this dynamic
function MessageDemo({ name, email }) {
  //console.log("I am insite messagedemo", props);

  return (
    <>
      <h1>
        Hello  {email} {name}
      </h1>
    </>
  );
}

export default App;
