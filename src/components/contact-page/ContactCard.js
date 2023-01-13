import "./ContactCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";

export default function ContactCard(props) {
  return (
    <div className="concard" id={props.name}>
      <img
        src={props.src}
        alt="github icon"
        className="headerlogo consym"
      ></img>
      <div className="contitle ">{props.title}</div>
      <div className="con-text context">{props.link}</div>
      <div className="con-text context2">{props.body}</div>
    </div>
  );
}
