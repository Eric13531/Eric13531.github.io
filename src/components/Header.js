import "./Header.css";
import { useSpring, animated } from "react-spring";

export default function Header() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <div className="header sticky">
      <animated.a href="#intro" className="home-link link">
        Home
      </animated.a>
      <animated.a href="#skills" className="other-link link">
        Skills
      </animated.a>
      <animated.a href="#projects" className="other-link link">
        Projects
      </animated.a>
      <animated.a href="#contact" className="other-link link">
        Contact
      </animated.a>

      <a
        href="https://www.linkedin.com/in/ericzhang80/"
        target="_blank"
        rel="noreferrer"
        className="logolink"
      >
        {" "}
        <img
          src="/linkedin.png"
          alt="linkedin logo"
          className="headerlogo"
        ></img>
      </a>
      <a
        href="https://github.com/Eric13531"
        target="_blank"
        rel="noreferrer"
        className="logolink2"
      >
        {" "}
        <img src="/github.png" alt="github logo" className="headerlogo"></img>
      </a>
    </div>
  );
}
