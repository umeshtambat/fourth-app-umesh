function App () {
  return (
    <>
    <h1>Props Demo </h1>

    {/* <MessageDemo />
    <MessageDemo message="Hello"/> */}
    <MessageDemo username="umesh" />
    <MessageDemo username="vaibhav" />
    <MessageDemo username="tushar" />
    
    
    
    </>
  )
}


//how to make this dynamic
function MessageDemo (props) {
  //console.log("I am insite messagedemo", props);

  return(
    <>
    <h1>Hello {props.username}</h1>
    </>
  )

}

export default App;