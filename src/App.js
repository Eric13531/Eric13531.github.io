import "./App.css";
import Page from "./components/Page.js";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function App() {
  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://firetest-6f398-default-rtdb.firebaseio.com/",
    apiKey: "AIzaSyCYq0a9HcgSQYXAqQiC3qnzP_RYes0as6M",
    authDomain: "firetest-6f398.firebaseapp.com",
    projectId: "firetest-6f398",
    storageBucket: "firetest-6f398.appspot.com",
    messagingSenderId: "283431084727",
    appId: "1:283431084727:web:1f3e4fa7ef383cd5656332",
    measurementId: "G-MT9VDRYM31",
  };

  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  return (
    <div className="app-div">
      <Page />
    </div>
  );
}

export default App;
