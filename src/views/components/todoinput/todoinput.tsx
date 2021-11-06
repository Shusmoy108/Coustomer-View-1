import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  Card,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import axios from "../../../controllers/axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",

      margin: "20px 20px 20px 20px",
      padding: "20px 45px 20px 20px",
      minHeight: "0",
    },
  })
);

export default function TodoInput() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [load, setLoad] = useState(false);

  return (
    <Card className={classes.root}>
      <Typography
        style={{ fontFamily: "Poppins", fontSize: 20, fontWeight: "bold" }}
      >
        {" "}
        Create New Task
      </Typography>
      <Dialog
        open={load}
        keepMounted
        onClose={() => {
          setLoad(false);
        }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Loading"}</DialogTitle>
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
      <TextField
        id="outlined-full-width"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        }}
        placeholder="Task Title"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <TextField
        id="outlined-full-width"
        // style={{ margin: 8 }}
        placeholder="Task Description"
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setDescription(e.target.value);
        }}
        multiline
        minRows="5"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#109CF1",
            textTransform: "capitalize",
            fontFamily: "Poppins",
            borderRadius: 50,
          }}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            setLoad(true);
            axios.addTodo(title, description).then((success) => {
              setLoad(false);
            });

            setTitle("");
            setDescription("");
          }}
        >
          <Typography
            style={{
              color: "white",
              fontFamily: "Poppins",
              padding: "0px 5px",
            }}
          >
            {" "}
            Create Task
          </Typography>
        </Button>
      </div>
    </Card>
  );
}
