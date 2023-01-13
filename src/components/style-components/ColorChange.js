//import "./Home.css";
import "./ColorChange.css";
import ".././Home.css";
import { useState, PropTypes, useEffect } from "react";

export default function ColorChange(props) {
  const [fadeProp, setFadeProp] = useState({
    fade: "color-out",
  });

  ColorChange.defaultProps = {
    text2: "Hello World!",
    time: 200,
  };
  ColorChange.propTypes = {
    text2: PropTypes?.string,
    time: PropTypes?.number,
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "color-in") {
        setFadeProp({
          fade: "color-out",
        });
      } else {
        setFadeProp({
          fade: "color-in",
        });
      }
    }, props.time);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <span className={`${fadeProp.fade} ${props.styles}`}>
      {props.text2} {props.next}
    </span>
  );
}
