import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo(props) {
  return (
    <div>
      <List className="todo__list">
        <ListItem>
          <ListItemText secondary="Task" primary={props.todo.todo} />
        </ListItem>
        <DeleteForeverIcon
          onClick={() => db.collection("todos").doc(props.todo.id).delete()}
        ></DeleteForeverIcon>
      </List>
      <br />
    </div>
  );
}

export default Todo;
