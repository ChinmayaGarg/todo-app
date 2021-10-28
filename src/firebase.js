import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDeagacH3SWSnXmUJITWRC6xzUQxNgp9v8",
  authDomain: "todo-app-987a8.firebaseapp.com",
  projectId: "todo-app-987a8",
  storageBucket: "todo-app-987a8.appspot.com",
  messagingSenderId: "239876343689",
  appId: "1:239876343689:web:e93e6f315a1167b7e20358",
  measurementId: "G-3GVESKFNT9",
});

const db = firebaseApp.firestore(); // In the variable db we are storing the connection.
// firebaseApp: It is the variable declared above, we are connecting to firestore
// Cloud Firestore is a cloud-hosted, NoSQL database that your iOS, Android, and web apps can access directly via native SDKs.

export default db;

// const auth = firebase.auth();
