import "./Home.css";
import Fader from "./Fader";

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
        <Fader
          text2={"My name is Eric Zhang and I'm a software developer."}
          time={450}
          styles="body-font h2font"
        />
        {/*<Fader text2="Eric Zhang" time={600} styles="body-font h2font" />
        <Fader
          text2=" and I'm a software developer."
          time={800}
          styles="body-font h2font"
        />*/}
      </span>
      {/*<h3 className="body-font h3font">
        I love computer science and coding. I do computing competitions and I
        have experience with Java, Python, C++, Html, CSS, JavaScript and
        React.js
      </h3>*/}
    </div>
  );
}
