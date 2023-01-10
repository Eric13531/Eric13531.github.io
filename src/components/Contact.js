import "./Contact.css";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <div className="contact-div" id="contact">
      <div className="contact-title">Contact Me</div>
      <ContactCard
        name="con1"
        title="Email"
        link=<a className="linkstyle" href="mailto:eric.zhang3@uwaterloo.ca">
          eric.zhang3@uwaterloo.ca
        </a>
        body="Send me an email"
      />
      <ContactCard
        name="con2"
        title="Github"
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
        title="Text"
        link="(+1) 647-687-9812"
        body="Send me a message"
      />
    </div>
  );
}
