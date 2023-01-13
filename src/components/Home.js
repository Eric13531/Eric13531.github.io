import "./Home.css";
import Fader from "./style-components/Fader";
import FaderContainer from "./fadertest/FaderContainer";

export default function Home(props) {
  return (
    <div id="intro" className="home">
      {/*<h1 id="intro" className="h1font">
        Hello,
      </h1>
      <h2 className="body-font h2font">
        My name is Eric Zhang and I'm a software developer.
      </h2>*/}
      <Fader
        theme={props.theme}
        text2="Hello,"
        fadeTime={400}
        styles="h1font"
      />

      <span className="fader-container">
        <Fader
          theme={props.theme}
          text2="My name is "
          fadeTime={800}
          styles="h2font"
        />
        <Fader
          theme={props.theme}
          text2="Eric Zhang"
          fadeTime={1400}
          colorTime={2000}
          styles="h2font bold-font"
        />
        <Fader
          theme={props.theme}
          text2=" and I'm a software developer."
          fadeTime={2000}
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
