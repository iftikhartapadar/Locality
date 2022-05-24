import firebase from "firebase";
import "firebase/auth";
import history from "../History";

export class Auth {
  signInWithEmailPassword(email, password) {
    // [START auth_signin_password]
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        history.push("/Homepage");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
    // [END auth_signin_password]
  }

  //You can replace the function signature with
  //function signInWithEmailPassword(email, pass)
  signUpWithEmailPassword(email, password) {
    // [START auth_signup_password]
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        history.push("/Homepage");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
        // Might give call back depending on error
      });
    // [END auth_signup_password]
  }

  signOut() {
    // [START auth_sign_out]
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("signout successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    // [END auth_sign_out]
  }

  // authStateListener() {
  //   // [START auth_state_listener]
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       //var uid = user.uid;
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });
  //   // [END auth_state_listener]
  // }

  currentUser() {
    // [START auth_current_user]
    const user = firebase.auth().currentUser;

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      return user;
    } else {
      // No user is signed in.
      return undefined;
    }
    // [END auth_current_user]
  }
}
