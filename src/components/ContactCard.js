import "./ContactCard.css";

export default function ContactCard(props) {
  return (
    <div className="concard" id={props.name}>
      {props.imgSrc}
      <div className="contitle ">{props.title}</div>
      <div className="context">{props.link}</div>
      <div className="context2">{props.body}</div>
    </div>
  );
}
