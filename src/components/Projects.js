import "./Projects.css";
import ProjectCard from "./ProjectCard.js";

export default function Projects() {
  return (
    <div className="projects-div" id="projects">
      <div className="projects-title">Projects</div>
      <ProjectCard
        name="proj1"
        title="Bullet Heaven Game"
        body="Bullet Heaven is a 2D game writtin in Java, featuring a GUI implemented with the Java Swing API. 
        "
        imgSrc="/spaceship_game.png"
        repoUrl=""
        sub="Java, Java Swing"
      />
      <ProjectCard
        name="proj2"
        title="Chess Simulator"
        body="This is a C++ program that simulates a chess game virtually. This application has automatic check and checkmate detection implemented"
        imgSrc="/chess_screenshot.png"
        repoUrl=""
        chessId="chess"
        sub="C++"
      />
    </div>
  );
}
