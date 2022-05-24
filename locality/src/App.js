import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Auth } from "./Auth/Auth";
import firebase from "firebase";
import { MyFirebase } from "./myFirebase";
import CreatingEvent from "./Pages/CreatingEvent";
import Homepage from "./Pages/Homepage";
import Onboarding from "./Pages/Onboarding";
import Search from "./Pages/Search";
import SignIn from "./Pages/SignIn";
import UserAccount from "./Pages/UserAccount";
import history from "./History";
import "bootstrap/dist/css/bootstrap.min.css";
import Bookmarks from "./Pages/Bookmarks";


<div>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>

<link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>
</div>

function App() {
  let db = new MyFirebase();
  let auth = new Auth();
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(auth.currentUser());

  let getEventsHandler = (newList) => {
    setEvents(Object.values(newList));
  };

  let getUsersHandler = (newList) => {
    setUsers(Object.values(newList));
  };

  if (events.length === 0) {
    db.getListOfObjects("/Event", getEventsHandler);
  }

  if (users.length === 0) {
    db.getListOfObjects("/Users", getUsersHandler);
  }

  let onAuthStateChanged = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        //var uid = user.uid;
        // ...
        console.log("Setting user onAuthStateChanged");
        setCurrentUser(user);
      } else {
        // User is signed out
        // ...
        setCurrentUser(null);
      }
    });
  };
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Onboarding />
          </Route>
          <Route path="/Homepage">
            <Homepage
              events={events}
              user={currentUser}
              onAuthStateChanged={onAuthStateChanged}
            />
          </Route>
          <Route path="/SignIn">
            <SignIn
              events={events}
              onAuthStateChanged={onAuthStateChanged}
              user={currentUser}
            />
          </Route>
          <Route path="/Search">
            <Search events={events} user={currentUser} />
          </Route>
          <Route path="/CreatingEvent">
            <CreatingEvent events={events} user={currentUser} />
          </Route>
          <Route path="/UserAccount">
            <UserAccount
              events={events}
              user={currentUser}
              users={users}
              onAuthStateChanged={onAuthStateChanged}
            />
          </Route>
          <Route path="/Bookmarks">
            <Bookmarks events={events} user={currentUser} users={users} onAuthStateChanged={onAuthStateChanged}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
