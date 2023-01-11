import "./ProjectCard.css";

export default function ProjectCard(props) {
  let optImg;
  if (props.name === "proj1") {
    optImg = (
      <img
        className="projimg2"
        src="/spaceship_game2.png"
        alt="spaceship2"
      ></img>
    );
  }
  return (
    <div className={`Projcard ${props.chessId + "container"}`} id={props.name}>
      <div className=""></div>
      <div className="projtitle">{props.title}</div>
      <img
        className={`projimg ${props.chessId}`}
        src={`${props.imgSrc}`}
        alt="whoops"
      ></img>
      {optImg}

      <div className="projsub">{props.sub}</div>
      <div className="projbody">{props.body}</div>
    </div>
  );
}
