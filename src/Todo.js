import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ListItemText, ListItemAvatar } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "./firebase";
import Checkbox from "@material-ui/core/Checkbox";

function Todo(props) {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText
          primary={props.todo.todo}
          secondary="Todo 🧑‍🚀"
        ></ListItemText>
        <Checkbox
          style={{ float: "right", paddingRight: "0.3em" }}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <IconButton aria-label="delete">
          <DeleteIcon
            onClick={(event) => {
              db.collection("todos").doc(props.todo.id).delete();
            }}
          />
        </IconButton>
      </ListItem>
      <Divider />
    </List>

    // <div>
    //   <li>{props.todo}</li>
    // </div>
  );
}

export default Todo;
