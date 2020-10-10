import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4toHBlR1g52_dVQVcGtQGKxOmNmoWoVg",
  authDomain: "todo-app-ranugad-reactjs.firebaseapp.com",
  databaseURL: "https://todo-app-ranugad-reactjs.firebaseio.com",
  projectId: "todo-app-ranugad-reactjs",
  storageBucket: "todo-app-ranugad-reactjs.appspot.com",
  messagingSenderId: "170116777038",
  appId: "1:170116777038:web:2944cc2febb593683aaf1f",
  measurementId: "G-J5JK96SCX0",
});
const db = firebaseApp.firestore();
export default db;
