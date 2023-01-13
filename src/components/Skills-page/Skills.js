import { theme } from "../../helper/helper";
import Card from "./Card";
import "./Skills.css";

export default function Skills(props) {
  return (
    <div className="skills-div" id="skills">
      <div style={{ color: `${props.theme.sectiontitle}` }} className="about">
        About Me
      </div>
      <Card name="card1" />
      <Card name="card2" />
      <Card name="card3" />
    </div>
  );
}
