import "./ContactCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";

export default function ContactCard(props) {
  return (
    <div
      style={{
        border: `1.5px solid ${props.theme.bodyfontz}`,

        background: `linear-gradient(
      ${props.theme.condeg}deg,
      ${props.theme.projstar} 0%,
      ${props.theme.projstar} 0%,
      ${props.theme.projend} 100%,
      ${props.theme.projend} 100%
    )`,
      }}
      className="concard"
      id={props.name}
    >
      <img
        style={{ filter: `invert(${props.theme.imginvert})` }}
        src={props.src}
        alt="github icon"
        className="headerlogo consym"
      ></img>
      <div style={{ color: props.theme.bodyfontz }} className="contitle ">
        {props.title}
      </div>
      <div className={`con-text context`}>{props.link}</div>
      <div
        style={{ color: props.theme.contacttext }}
        className="con-text context2"
      >
        {props.body}
      </div>
    </div>
  );
}
