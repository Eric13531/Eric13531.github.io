import "./Contact.css";
import ContactCard from "./ContactCard";

export default function Contact(props) {
  return (
    <div
      style={{
        background: `linear-gradient(
        180deg,
      ${props.theme.concol} 0%,
      ${props.theme.congrad} 100%
    )`,
      }}
      className="contact-div"
      id="contact"
    >
      <div
        style={{ color: `${props.theme.sectiontitle}` }}
        className="contact-title"
      >
        Contact Me
      </div>
      <ContactCard
        name="con1"
        theme={props.theme}
        title="Email"
        src="/email.png"
        icon="fa-solid fa-envelope-open-text"
        link=<a
          className={`${props.theme.darklink} linkstyle`}
          href="mailto:eric.zhang3@uwaterloo.ca"
        >
          eric.zhang3@uwaterloo.ca
        </a>
        body="Send me an email"
      />
      <ContactCard
        name="con2"
        theme={props.theme}
        title="Resume"
        src="/resumeimg.png"
        link=<a
          className={`${props.theme.darklink} linkstyle`}
          href="/Eric_Zhang_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Open
        </a>
        body="View my resume"
      />
      <ContactCard
        name="con3"
        theme={props.theme}
        title="Github"
        src="/github.png"
        link=<a
          className={`${props.theme.darklink} linkstyle`}
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
