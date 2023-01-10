import "./Header.css";

export default function Header() {
  return (
    <div className="header sticky">
      <a href="#intro" className="home-link link">
        Home
      </a>
      <a href="#skills" className="other-link link">
        Skills
      </a>
      <a href="#projects" className="other-link link">
        Projects
      </a>
      <a href="#contact" className="other-link link">
        Contact
      </a>
    </div>
  );
}
