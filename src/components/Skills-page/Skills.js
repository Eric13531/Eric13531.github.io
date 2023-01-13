import { theme } from "../../helper/helper";
import Card from "./Card";
import "./Skills.css";

export default function Skills(props) {
  return (
    <div className="skills-div" id="skills">
      <div style={{ color: `${props.theme.sectiontitle}` }} className="about">
        About Me
      </div>
      <Card theme={props.theme} name="card1" />
      <Card theme={props.theme} name="card2" />
      <Card theme={props.theme} name="card3" />
    </div>
  );
}
