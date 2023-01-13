import "./Contact.css";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <div className="contact-div" id="contact">
      <div className="contact-title">Contact Me</div>
      <ContactCard
        name="con1"
        title="Email"
        src="/email.png"
        icon="fa-solid fa-envelope-open-text"
        link=<a className="linkstyle" href="mailto:eric.zhang3@uwaterloo.ca">
          eric.zhang3@uwaterloo.ca
        </a>
        body="Send me an email"
      />
      <ContactCard
        name="con2"
        title="Resume"
        src="/resumeimg.png"
        link=<a
          className="linkstyle"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Open Resume
        </a>
        body="View my resume"
      />
      <ContactCard
        name="con3"
        title="Github"
        src="/github.png"
        link=<a
          className="linkstyle"
          href="https://github.com/Eric13531"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/Eric13531
        </a>
        body="Check out my Github"
      />
    </div>
  );
}
