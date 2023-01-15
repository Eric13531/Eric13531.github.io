import "./App.css";
import Page from "./components/Page.js";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, onValue } from "firebase/database";
import { useRef, useEffect, useState, child } from "react";

function App() {
  const [clicks, setClicks] = useState(0);
  const [views, setViews] = useState(0);
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
  const referenceClicks = ref(db, "clicks");
  const referenceViews = ref(db, "views");

  const intervalId = window.setInterval(() => {
    setTicker(!ticker);
  }, 10000);

  const handleClick = async () => {
    let c = await getInfoClicks();
    console.log(c.clicks + "asdf");
    await set(referenceClicks, {
      clicks: c.clicks + 1,
    });

    setClicks(c.clicks + 1);

    console.log(clicks);
    console.log("Clicks Ok??");
  };

  const handleOpen = async () => {
    let c = await getInfoViews();
    console.log(c.views + "asdfasdf");

    await set(referenceViews, { views: c.views + 1 });

    setViews(c.views + 1);

    console.log(views);
    console.log("Views Ok??");
  };

  window.onclick = (event) => {
    console.log("click detected");
    getInfoClicks();
    handleClick();
  };

  window.onload = (event) => {
    console.log("window loaded");
    getInfoViews();
    handleOpen();
  };

  const getInfoClicks = () => {
    console.log("triggered");
    let data = 0;
    onValue(referenceClicks, (snapshot) => {
      data = snapshot.val();
      console.log("data: " + data.clicks);
      setClicks(data.clicks);
      console.log("Ok??");
    });

    return data;
  };

  const getInfoViews = async () => {
    console.log("triggered2");
    let data = 0;
    await get(referenceViews)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          data = snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return data;
  };

  useEffect(() => {
    console.log("tick");
    getInfoClicks();
    getInfoViews();
  }, [ticker]);

  return (
    <div ref={boxRef} className="app-div">
      <Page clickCount={clicks} viewsCount={views} />
    </div>
  );
}

export default App;
