import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data()["todo"] }))
        );
      });
  }, []);
  console.log(todos);
  const add_task = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>
        <b>TODO APP</b>
      </h1>
      <form>
        <FormControl>
          <InputLabel>Add Task</InputLabel>
          <Input
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></Input>
          <Button
            variant="contained"
            color="primary"
            disabled={!input}
            onClick={add_task}
            type="submit"
          >
            <b>Add Task</b>
          </Button>
        </FormControl>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo}></Todo>
        ))}
      </ul>
    </div>
  );
}

export default App;
// Ranuga
