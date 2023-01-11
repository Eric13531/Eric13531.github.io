import "./Home.css";
import Fader from "./Fader";
import FaderContainer from "./fadertest/FaderContainer";

export default function Home() {
  return (
    <div id="intro" className="home">
      {/*<h1 id="intro" className="h1font">
        Hello,
      </h1>
      <h2 className="body-font h2font">
        My name is Eric Zhang and I'm a software developer.
      </h2>*/}
      <Fader text2="Hello," styles="h1font" />

      <span className="fader-container">
        <Fader text2={"My name is "} time={600} styles="h2font" />
        <Fader text2="Eric Zhang" time={1000} styles="h2font bold-font" />
        <Fader
          text2=" and I'm a software developer."
          time={1500}
          styles="h2font"
        />
      </span>
      {/*<h3 className="body-font h3font">
        I love computer science and coding. I do computing competitions and I
        have experience with Java, Python, C++, Html, CSS, JavaScript and
        React.js
      </h3>*/}
    </div>
  );
}
