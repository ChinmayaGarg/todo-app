import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  //Mission with firebase: When the app loads, we need to listen to the databse and fetch new todos as they get added/removed
  useEffect(() => {
    //this code fires when the app loads
    db.collection("todos")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // it wil stop the refresh due to button type = "submit"

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setTodos([...todos, input]); // This code is commented because whenever ADD TODO button is clicked it will trigger addTodo function -> then the input will get stored in database -> as soon as input will get stored, it will fire up the snapshot adding todo to the list in real time (Snapshot is heard by onSnapshot in useEffect.). Hence, we won't be needing setTodo here.
    setInput("");
  };

  return (
    <div className="App">
      <h1>TODO List 🚀</h1>
      <form>
        {/* <input value={input} onChange={(event) => setInput(event.target.value)} /> */}
        <FormControl>
          <InputLabel htmlFor="my-input">WRITE A TO DO</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add TODO
        </Button>
        {/* <button type="submit" onClick={addTodo}> Add TODO </button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/*
This allows the input field to remember text inside it. 
How? After every event input field is changed dynamically by concatenating the letter to input.
setInput: sets the value of the input.
event.target.value
    event: The Event interface represents an event which takes place in the DOM. (https://developer.mozilla.org/en-US/docs/Web/API/Event)
    target: The target property of the Event interface is a reference to the object onto which the event was dispatched. (https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
    value: value is the value of the input element.
   
    <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />;

*/
