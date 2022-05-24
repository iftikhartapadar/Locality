import firebaseApp from "firebase/app";
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRbKvngFTmKthnjfI-949da4ErFvE2N7Q",
  authDomain: "locality-72f35.firebaseapp.com",
  projectId: "locality-72f35",
  storageBucket: "locality-72f35.appspot.com",
  messagingSenderId: "561575485026",
  appId: "1:561575485026:web:00c0cf0a2e67f13e1fbb3b",
};
if (firebase.apps.length === 0) {
  firebaseApp.initializeApp(firebaseConfig);
}
const storage = firebaseApp.storage();

export class MyFirebase {
  createEvent(name, description, date, tags, location, creator, url) {
    let newEventRef = firebase.database().ref("Event");
    newEventRef
      .push()
      .set({
        Creator: creator,
        Date: date,
        Description: description,
        Location: location,
        Name: name,
        Tags: tags,
        imgUrl: url,
      })
      .then(
        () => {
          console.log("Added the new event successfully!");
        },
        (reason) =>
          console.log("ERROR: Did NOT add the event.  Reason: " + reason)
      );
  }

  createUser(email, password) {
    let newUserRef = firebase.database().ref("Users");
    newUserRef
      .push()
      .set({
        Bookmarks: null,
        Email: email,
        Password: password,
      })
      .then(
        () => {
          console.log("Added the new user successfully!");
        },
        (reason) =>
          console.log("ERROR: Did NOT add the user.  Reason: " + reason)
      );
  }

  createBookmark(name, description, date, tags, location, creator, url) {
    let newBookmarkRef = firebase.database().ref("/Users/u1");
    newBookmarkRef
      .push()
      .set({
        Creator: creator,
        Date: date,
        Description: description,
        Location: location,
        Name: name,
        Tags: tags,
        imgUrl: url,
      })
      .then(
        () => {
          console.log("Added new bookmark successfully!");
        },
        (reason) =>
          console.log("ERROR: Did NOT add the bookmark.  Reason: " + reason)
      );
  }

  getListOfObjects(location, callWhenFinished) {
    let ref = firebase.database().ref(location);
    ref
      .once("value")
      .then((snapshot) => {
        var listOfObjects = snapshot.val() || []; // Either we got the users, or else we have an empty list
        callWhenFinished(listOfObjects);
      })
      .catch((error) => {
        console.log("Couldn't get list of objects: " + error);
        callWhenFinished([]);
      });
  }

  deleteObject(location, callWhenFinished) {
    firebase
      .database()
      .ref(location)
      .remove()
      .then(callWhenFinished)
      .catch(callWhenFinished);
  }
}

export { storage, firebaseApp as default };
