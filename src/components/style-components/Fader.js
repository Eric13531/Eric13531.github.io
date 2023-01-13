//import "./Home.css";
import "./Fader.css";
import ".././Home.css";
import { useState, PropTypes, useEffect } from "react";

export default function Fader(props) {
  const [fadeProp, setFadeProp] = useState({
    fade: "pause",
  });

  const [colorProp, setColorProp] = useState({
    color: "color-in",
  });

  Fader.defaultProps = {
    text2: "Hello World!",
    fadeTime: 0,
    colorTime: 0,
  };
  Fader.propTypes = {
    text2: PropTypes?.string,
    fadeTime: PropTypes?.number,
    colorTime: PropTypes?.number,
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "pause")
        setFadeProp({
          fade: "fade-in",
        });
      else if (
        fadeProp.fade === "fade-in" &&
        props.colorTime &&
        props.colorTime !== 0
      ) {
        console.log(props.colorTime);
        setFadeProp({
          fade: "color-in",
        });
      } else if (
        props.colorTime !== 0 &&
        props.colorTime &&
        fadeProp.fade === "color-in"
      ) {
        setFadeProp({
          fade: "color-out",
        });
      } else if (props.colorTime && props.colorTime !== 0) {
        setFadeProp({
          fade: "color-in",
        });
      }
    }, props.fadeTime);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <span className={`${fadeProp.fade} ${props.styles}`}>{props.text2}</span>
  );
}
