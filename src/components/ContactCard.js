import "./ContactCard.css";

export default function ContactCard(props) {
  return (
    <div className="concard" id={props.name}>
      {props.imgSrc}
      <div className="contitle ">{props.title}</div>
      <div className="con-text context">{props.link}</div>
      <div className="con-text context2">{props.body}</div>
    </div>
  );
}
