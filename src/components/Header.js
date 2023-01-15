import "./Header.css";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Fader from "./style-components/Fader";
import { getDatabase, ref, set, onValue } from "firebase/database";

export default function Header(props) {
  // const [clicks, setClicks] = useState(0);
  // const [ticker, setTicker] = useState(true);

  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  // });
  // const db = getDatabase();
  // const reference = ref(db, "clicks");

  // var intervalId = window.setInterval(() => {
  //   setTicker(!ticker);
  // }, 5000);

  const handleClick = async () => {
    props.changeTheme();

    //   await set(reference, {
    //     clicks: clicks + 1,
    //   });
    //   console.log("Not Ok??");
  };

  // // const clickCountRef = ref(db, "clicks");

  // useEffect(() => {
  //   onValue(reference, (snapshot) => {
  //     const data = snapshot.val();
  //     console.log(data);
  //     setClicks(data.clicks);
  //     // console.log("Ok??");
  //   });
  // }, [ticker]);

  return (
    <div
      style={{
        background: `linear-gradient(
      90deg,
      ${props.theme.head1} 0%,
      ${props.theme.head2} 0%,
      ${props.theme.head3} 100%,
      ${props.theme.head4} 100%
    )`,
      }}
      className="header sticky"
    >
      <animated.a
        href="#intro"
        className={`${props.theme.darklink} home-link link`}
      >
        Home
      </animated.a>
      <animated.a
        href="#skills"
        className={`${props.theme.darklink} other-link link`}
      >
        Skills
      </animated.a>
      <animated.a
        href="#projects"
        className={`${props.theme.darklink} other-link link`}
      >
        Projects
      </animated.a>
      <animated.a
        href="#contact"
        className={`${props.theme.darklink} other-link link`}
      >
        Contact
      </animated.a>

      <a
        style={{ filter: props.theme.filter }}
        href="https://www.linkedin.com/in/ericzhang80/"
        target="_blank"
        rel="noreferrer"
        className="logolink"
      >
        <img
          src="/linkedin.png"
          alt="linkedin logo"
          className="vertical-center headerlogo"
        ></img>
      </a>
      <a
        style={{ filter: props.theme.filter }}
        href="https://github.com/Eric13531"
        target="_blank"
        rel="noreferrer"
        className="logolink2"
      >
        {" "}
        <img
          src="/github.png"
          alt="github logo"
          className=" vertical-center headerlogo"
        ></img>
      </a>

      <button
        style={{
          background: "transparent",
          border: "none",
          zIndex: 100,
          cursor: "pointer",
        }}
        className="vertical-center logolink3"
        onClick={handleClick}
      ></button>

      <Fader
        theme={props.theme}
        text2={
          <img
            src={props.theme.src}
            alt="dark mode"
            className="vertical-center headerlogo moonimg"
          ></img>
        }
        fadeTime={400}
        styles=""
      />
    </div>
  );
}
