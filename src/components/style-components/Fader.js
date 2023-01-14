//import "./Home.css";
import "./Fader.css";
import ".././Home.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Fader(props) {
  const [fadeProp, setFadeProp] = useState({
    fade: "pause",
  });

  const [fadeDelay, setFadeDelay] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "pause") {
        setFadeProp({
          fade: "fade-in",
        });
        setFadeDelay(1000);
      } else if (
        fadeProp.fade === "fade-in" &&
        props.colorTime &&
        props.colorTime !== 0
      ) {
        setFadeProp({
          fade: "color-in",
        });
        setFadeDelay(0);
      } else if (
        props.colorTime !== 0 &&
        props.colorTime &&
        fadeProp.fade === "color-in"
      ) {
        setFadeProp({
          fade: "color-out",
        });
        setFadeDelay(0);
      } else if (props.colorTime && props.colorTime !== 0) {
        setFadeProp({
          fade: "color-in",
        });
        setFadeDelay(0);
      } else {
        setFadeProp({
          fade: "done-fade",
        });
        setFadeDelay(0);
      }
    }, Math.max(fadeDelay, props.fadeTime));
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <span
      style={{ transition: "opacity color 1s ease" }}
      className={`${props.theme.darktext} ${fadeProp.fade} ${props.styles}`}
    >
      {props.text2}
    </span>
  );
}

Fader.propTypes = {
  text2: PropTypes.string,
  fadeTime: PropTypes.number,
  colorTime: PropTypes.number,
};
Fader.defaultProps = {
  text2: "Hello World!",
  fadeTime: 0,
  colorTime: 0,
};
