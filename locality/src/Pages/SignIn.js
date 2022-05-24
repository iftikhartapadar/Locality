import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "../stylings/Signin.css";
import "../App.css";
import { Auth } from "../Auth/Auth";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { MyFirebase } from "../myFirebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

function SignIn(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [join, setJoin] = useState(false);
  const classes = useStyles();

  let submitAccountSignupHandler = (event) => {
    event.preventDefault();
    console.log("Username: " + state.username + "Password: " + state.password);
    //creating new user in firebase
    let db = new MyFirebase();
    db.createUser(
      state.username,
      state.password
    );
    let auth = new Auth();
    auth.signUpWithEmailPassword(state.username, state.password);
    props.onAuthStateChanged();
  };

  let submitAccountLoginHandler = (event) => {
    event.preventDefault();
    console.log("Username: " + state.username + "Password: " + state.password);

    let auth = new Auth();
    auth.signInWithEmailPassword(state.username, state.password);
    props.onAuthStateChanged();
  };

  let changeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="signin">
      <Container>
      <div>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>
    </div>
      {join ? (
          <div className="signin-container">
            <ArrowBackIcon className="back-btn" fontSize="large" onClick={event =>  window.location.href='/Homepage'}></ArrowBackIcon>
          <div className="signin-title">Join</div>
          <form
            className={classes.root}
            onSubmit={(e) => submitAccountSignupHandler(e)}>
          <div>
            <TextField
              required
              id="username"
              name="username"
              label="Username"
              onChange={(e) => changeHandler(e)}/>
            <br/>
            <TextField
              required
              id="user-password"
              name="password"
              type="password"
              label="Password"
              onChange={(e) => changeHandler(e)}/>
            <br/>
            <br/>
            <Button as="input" type="submit" value="Submit" readOnly></Button>
          </div>
          </form>
          <br />
          <p style={{color: "white"}}>Already have an account?</p>
          <Button onClick={() => setJoin(!join)}>Sign In</Button>
        </div>
      ) : (
            <div className="signin-container">
              <ArrowBackIcon className="back-btn" fontSize="large" onClick={event =>  window.location.href='/Homepage'}></ArrowBackIcon>
          <div className="signin-title">Sign In</div>
          <form
            className={classes.root}
            onSubmit={(e) => submitAccountLoginHandler(e)}>
            <div>
              <TextField
                required
                id="username"
                name="username"
                label="Username"
                onChange={(e) => changeHandler(e)}/>
              <br/>
              <TextField
                required
                id="user-password"
                name="password"
                type="password"
                label="Password"
                onChange={(e) => changeHandler(e)}/>
              <br/>
              <br/>
              <Button as="input" type="submit" value="Submit" readOnly></Button>
            </div>
          </form>
          <br/>
          <p style={{color: "white"}}>Don't have an account?</p>
          <Button onClick={() => setJoin(!join)}>Join here</Button>
        </div>
      )}
      
    </Container>
    </div>
  );
}

export default SignIn;
