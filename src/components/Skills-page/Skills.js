import Card from "./Card";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills-div" id="skills">
      <div className="about">About Me</div>
      <Card name="card1" />
      <Card name="card2" />
      <Card name="card3" />
    </div>
  );
}
