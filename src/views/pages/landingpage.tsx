import React, { useEffect } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TodoList from "../components/todoprogress/todolist";
import { Button } from "@material-ui/core";
import axios from "../../controllers/axios";
import { useHistory } from "react-router-dom";
import TodoInput from "../components/todoinput/todoinput";
import { ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },

    toolbar: theme.mixins.toolbar,
    todo: {
      flex: 1,
      margin: "10px 10px 10px 10px",
    },
    todolist: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    logoutbutton: {
      display: "block",
      backgroundColor: "red",
      textTransform: "capitalize",
      fontFamily: "Poppins",
      borderRadius: 50,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    logoutIcon: {
      display: "none",
      backgroundColor: "red",
      borderRadius: 50,
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      paddingTop: theme.spacing(7),
    },
  })
);

export default function LandingPage() {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("jwtToken") == null) {
      history.push("/login");
    }
  });
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap style={{ flex: 1 }}>
            {localStorage.getItem("username")}'s To Do : What to do??
          </Typography>
          <Button
            variant="contained"
            //color="primary"
            className={classes.logoutbutton}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              var s: Boolean = axios.logout();
              if (s) {
                history.push("/login");
              }
            }}
          >
            <Typography style={{ color: "white", fontFamily: "Poppins" }}>
              {" "}
              LogOut{" "}
            </Typography>
          </Button>
          <Button
            variant="contained"
            //color="primary"
            className={classes.logoutIcon}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              axios.logout();
              history.push("/login");
            }}
          >
            <ExitToApp />
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.content}>
        <TodoInput />

        <TodoList />
      </div>
    </div>
  );
}
