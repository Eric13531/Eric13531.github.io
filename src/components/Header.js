import "./Header.css";
import { useSpring, animated } from "react-spring";
import { faPersonPraying } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  const handleClick = () => {
    props.changeTheme();
    console.log("click receive");
  };

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
        style={{ background: "transparent", border: "none", zIndex: 100 }}
        className="vertical-center logolink3"
        onClick={handleClick}
      ></button>
      <img
        src={props.theme.src}
        alt="dark mode"
        className="vertical-center headerlogo moonimg"
      ></img>
    </div>
  );
}
