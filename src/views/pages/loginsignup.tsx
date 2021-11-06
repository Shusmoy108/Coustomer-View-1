import React, { useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Card,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import axios from "../../controllers/axios";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",
      padding: "40px",
    },
  })
);

export default function LoginPage() {
  // const [values, setValues] = React.useState<State>({
  //   username: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false,
  // });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            My To Do: What to do
          </Typography>
        </Toolbar>
      </AppBar>

      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card className={classes.root}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {" "}
            Login OR Sign Up
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: 14,
                width: "100%",
                paddingTop: 10,

                // fontWeight: "bold",
                //textAlign: "center",
              }}
            >
              {" "}
              User Name
            </Typography>
            <TextField
              id="username"
              style={{ marginTop: 0 }}
              placeholder="User Name"
              value={username}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);
              }}
            />
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: 14,
                width: "100%",
                paddingTop: 10,

                // fontWeight: "bold",
                //textAlign: "center",
              }}
            >
              {" "}
              Password
            </Typography>
            <TextField
              id="password"
              style={{ marginTop: 0 }}
              placeholder="Password "
              margin="normal"
              value={password}
              //type={"password"}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      onMouseDown={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        event.preventDefault();
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
                //      endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //     >
                //       {showPassword ? <Visibility /> : <VisibilityOff />}
                //     </IconButton>
                //   </InputAdornment>
                // }
              }}
              // endAdornment={
              //   <InputAdornment position="end">
              //     <IconButton
              //       aria-label="toggle password visibility"
              //       onClick={handleClickShowPassword}
              //       onMouseDown={handleMouseDownPassword}
              //     >
              //       {values.showPassword ? <Visibility /> : <VisibilityOff />}
              //     </IconButton>
              //   </InputAdornment>
              //}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
          <Dialog open={open} keepMounted onClose={handleClose}>
            <DialogTitle id="alert-dialog-slide-title">{"Alert"}</DialogTitle>
            <DialogContent>{msg}</DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                margin: 10,
              }}
            >
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
                  axios.login(username, password).then((success) => {
                    setLoad(false);
                    if (success) {
                      history.push("/");
                    } else {
                      setMsg("Incorrect Password");
                      handleClickOpen();
                    }
                  });
                }}
              >
                <Typography style={{ color: "white", fontFamily: "Poppins" }}>
                  {" "}
                  Login{" "}
                </Typography>
              </Button>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "#C71585",
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  borderRadius: 50,
                }}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  setLoad(true);
                  axios.register(username, password).then((success) => {
                    setLoad(false);
                    console.log(success);
                    if (success) {
                      history.push("/");
                    } else {
                      setMsg("User Already Exist");
                      handleClickOpen();
                    }
                  });
                }}
              >
                <Typography style={{ color: "white", fontFamily: "Poppins" }}>
                  {" "}
                  SignUp{" "}
                </Typography>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
