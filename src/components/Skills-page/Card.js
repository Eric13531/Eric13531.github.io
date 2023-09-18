import "./Card.css";

export default function Card(props) {
  const title = props.title,
    text = props.text,
    text2 = props.text2,
    group = props.group;
  return (
    <div
      style={{
        border: `1.5px solid ${props.theme.bodyfontz}`,
        background: `linear-gradient(
      220deg,
      ${props.theme.projstar} 0%,
      ${props.theme.projstar} 0%,
      ${props.theme.projend} 100%,
      ${props.theme.projend} 100%
    )`,
      }}
      className="card"
      id={props.name}
    >
      {props.imgSrc}
      <div style={{ color: `${props.theme.bodyfontz}` }} className="text title">
        {title}
      </div>
      <div
        style={{ color: `${props.theme.bodyfontz}` }}
        className={`text ${group}`}
      >
        {text}
      </div>
      <div
        style={{ color: `${props.theme.bodyfontz}` }}
        className={`text  text2 ${group}`}
      >
        {text2}
      </div>
    </div>
  );
}
