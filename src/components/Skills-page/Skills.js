import { theme } from "../../helper/helper";
import Card from "./Card";
import "./Skills.css";

export default function Skills(props) {
  const title = ["Languages", "Tools", ""];
  const text = [
    "Python, Java, C/C++, HTML, CSS, JavaScript, SQL, Racket",
    "Visual Studio Code, React.js, Node.js, Git, Github, Jest, Docker, NetBeans, Eclipse, Jira",
    "Hi, my name is Eric Zhang. I'm a Computer Science undergraduate at the University of Waterloo with over five years of coding experience.",
  ];
  const text2 =
    "I'm seeking an internship where I can develop my skills in a collaborative setting.";

  const group = ["smallCard", "smallCard, bigCard"];
  return (
    <div className="skills-div" id="skills">
      <div style={{ color: `${props.theme.sectiontitle}` }} className="about">
        About Me
      </div>
      <Card
        theme={props.theme}
        title={title[0]}
        text={text[0]}
        name="card1"
        group={group[0]}
      />
      <Card
        theme={props.theme}
        title={title[1]}
        text={text[1]}
        name="card2"
        group={group[0]}
      />
      <Card
        theme={props.theme}
        title={title[2]}
        text={text[2]}
        text2={text2}
        name="card3"
        group={group[1]}
      />
    </div>
  );
}
