import Fader from "../Fader";
import "./FaderContainer.css";

export default function FaderContainer() {
  return (
    <div id="intro" className="fcont">
      asdf <Fader text2={"My name is "} time={450} styles=" h22font" />{" "}
      <Fader text2={"My name is "} time={450} styles=" h22font" />{" "}
      <Fader text2={"My name is shshshs"} time={450} styles=" h22font" />{" "}
      <Fader text2={"My name is "} time={450} styles=" h22font" />{" "}
      <Fader text2={"My name is "} time={450} styles=" h22font" />{" "}
      <Fader text2={"My name is "} time={450} styles=" h22font" />{" "}
    </div>
  );
}
