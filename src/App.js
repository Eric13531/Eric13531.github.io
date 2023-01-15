import "./App.css";
import Page from "./components/Page.js";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, onValue } from "firebase/database";
import { useRef, useEffect, useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);
  const [ticker, setTicker] = useState(true);

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

  const boxRef = useRef();
  const reference = ref(db, "clicks");

  var intervalId = window.setInterval(() => {
    setTicker(!ticker);
  }, 10000);

  const handleClick = async () => {
    let c = getInfo();
    console.log(c);
    await set(reference, {
      clicks: c.clicks + 1,
    });

    setClicks(c.clicks + 1);

    console.log(clicks);
    console.log("Not Ok??");
  };

  window.onclick = (event) => {
    console.log("click detected");
    getInfo();
    handleClick();
  };

  const getInfo = () => {
    console.log("triggered");
    let data = 0;
    onValue(reference, (snapshot) => {
      data = snapshot.val();
      console.log("data: " + data.clicks);
      setClicks(data.clicks);
      console.log("Ok??");
    });

    return data;
  };

  useEffect(() => {
    console.log("tick");
    getInfo();
  }, [ticker]);

  return (
    <div ref={boxRef} className="app-div">
      <Page clickCount={clicks} />
    </div>
  );
}

export default App;
