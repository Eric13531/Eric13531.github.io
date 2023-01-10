import "./Card.css";

export default function Card(props) {
  console.log(props.name);
  let title, text, group;
  let text2;
  if (props.name === "card1") {
    title = "Languages";
    text =
      "Python, Java, C++, HTML, CSS, JavaScript, React.js, Node.js, SQL, Git";
    group = "smallCard";
  } else if (props.name === "card2") {
    title = "Tools";
    text = "Visual Studio Code, NetBeans, Eclipse, Jest, Github";
    group = "smallCard";
  } else if (props.name === "card3") {
    title = "";
    text =
      "Hi, my name is Eric Zhang. I'm a Computer Science undergraduate at the University of Waterloo with over five years of coding experience.";
    text2 =
      "I'm seeking an internship where I can develop my skills in a collaborative setting.";
    group = "bigCard";
  } else {
    title = "Default Title";
    text = "Default Text";
  }
  return (
    <div className="card" id={props.name}>
      {props.imgSrc}
      <div className="text title">{title}</div>
      <div className={`text ${group}`}>{text}</div>
      <div className={`text  text2 ${group}`}>{text2}</div>
    </div>
  );
}
