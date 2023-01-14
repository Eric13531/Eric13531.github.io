import "./Page.css";
import Home from "./Home.js";
import Header from "./Header.js";
import Skills from "./Skills-page/Skills.js";
import Projects from "./projects-page/Projects";
import Contact from "./contact-page/Contact.js";

import { theme } from "../helper/helper.js";
import { useState } from "react";

export default function Body() {
  const [mode, setMode] = useState(theme(false));
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  /*if (localStorage.getItem("dark?") === null) {
    localStorage.setItem("dark?", isDarkTheme);
  } else {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    setIsDarkTheme(initialValue);
    setMode(theme(initialValue));
  }
  */
  const handleClick = () => {
    console.log(isDarkTheme);
    if (isDarkTheme) {
      setIsDarkTheme(false);
    } else {
      setIsDarkTheme(true);
    }

    localStorage.setItem("dark?", !isDarkTheme);
    setMode(theme(!isDarkTheme));
  };

  return (
    /*<div className="home">
      <h1 className="title-font h1font"> Hello, </h1>
      <h2 className="body-font h2font">
        My name is Eric Zhang and I'm a first year Computer Science student at
        the University of Waterloo.
      </h2>
      <h3 className="body-font h3font">
        I love computer science and coding. I do computing competitions and I
        have experience with Java, Python, C++, Html, CSS, JavaScript and
        React.js
      </h3>
  </div>*/
    <div style={{ backgroundColor: mode.bg }}>
      <Header theme={mode} changeTheme={handleClick}></Header>
      <Home theme={mode}></Home>
      <Skills theme={mode}></Skills>
      <Projects theme={mode}></Projects>
      <Contact theme={mode}></Contact>
    </div>
  );
}
