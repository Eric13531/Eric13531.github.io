//import "./Home.css";
import "./Fader.css";
import ".././Home.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { faPersonPraying } from "@fortawesome/free-solid-svg-icons";

export default function Fader(props) {
  const [fadeProp, setFadeProp] = useState({
    fade: "pause",
  });

  const [colorProp, setColorProp] = useState({
    color: "color-in",
  });

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
    <span
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
