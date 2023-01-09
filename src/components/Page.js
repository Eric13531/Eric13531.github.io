import "./Page.css";
import Home from "./Home.js";
import Header from "./Header.js";
import Skills from "./Skills.js";

export default function Body() {
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
    <div>
      <Header></Header>
      <Home></Home>
      <Skills></Skills>
    </div>
  );
}
