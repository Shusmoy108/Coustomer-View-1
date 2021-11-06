import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import TodoCard from "./todocard";
import axios from "../../../controllers/axios";
import { Grid } from "@material-ui/core";
interface TodoFields {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  uid: string;
  username: string;
}
export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoFields[]>([]);

  useEffect(() => {
    axios.getTodo().then((todos) => {
      setTodoList(todos);
    });
  });
  return (
    <div style={{ padding: 10 }}>
      <Typography
        style={{
          fontFamily: "Poppins",
          fontSize: 20,
          marginLeft: "25px",
          fontWeight: "bold",
        }}
      >
        {" "}
        All Task
      </Typography>

      <Grid container spacing={2}>
        {todoList.map((todo, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={index}>
              <TodoCard {...todo} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
