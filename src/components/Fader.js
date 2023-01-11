//import "./Home.css";
import "./Fader.css";
import "./Home.css";
import { useState, PropTypes, useEffect } from "react";

export default function Fader(props) {
  const [fadeProp, setFadeProp] = useState({
    fade: "pause",
  });

  Fader.defaultProps = {
    text2: "Hello World!",
    time: 200,
  };
  Fader.propTypes = {
    text2: PropTypes?.string,
    time: PropTypes?.number,
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      setFadeProp({
        fade: "fade-in",
      });
    }, props.time);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <span className={`${fadeProp.fade} ${props.styles}`}>
      {props.text2} {props.next}
    </span>
  );
}
