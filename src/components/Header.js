import "./Header.css";

export default function Header() {
  return (
    <div className="header sticky">
      <a href="#intro" className="home-link link">
        Home
      </a>
      <a href="#skills" className="link">
        Skills
      </a>
    </div>
  );
}
