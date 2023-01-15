import "./Projects.css";
import ProjectCard from "./ProjectCard.js";

export default function Projects(props) {
  const printStats = () => {
    return `Views: ${props.viewsCount}
    Clicks: ${props.clickCount} `;
  };

  return (
    <div className="projects-div" id="projects">
      <div
        style={{ color: `${props.theme.sectiontitle}` }}
        className="projects-title"
      >
        Projects
      </div>
      <ProjectCard
        name="proj1"
        theme={props.theme}
        title="Bullet Heaven Game"
        body="Bullet Heaven is a 2D game written in Java, featuring a GUI implemented with the Java Swing API. 
        "
        imgSrc="/spaceship_game.png"
        repoUrl=""
        sub="Java, Java Swing"
      />
      <ProjectCard
        name="proj2"
        theme={props.theme}
        title="Chess Simulator"
        body="This is a C++ program that simulates a chess game virtually. This application has automatic check and checkmate detection implemented"
        imgSrc="/chess_screenshot.png"
        repoUrl=""
        chessId="chess"
        sub="C++"
      />
      <ProjectCard
        name="stats"
        theme={props.theme}
        title="Website Statistics:"
        // body="This is a C++ program that simulates a chess game virtually. This application has automatic check and checkmate detection implemented"
        repoUrl=""
        chessId="chess"
        subb={printStats()}
      />
    </div>
  );
}
