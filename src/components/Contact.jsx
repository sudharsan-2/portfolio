import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import sudharsaResume from "../assets/Sudharsan Resume-2.pdf";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>

      <div className="contact-card">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <span>+91 63830 72526</span>
        </div>

        <div className="contact-item">
  <FaEnvelope className="icon" />
  <a href="mailto:sudharsan260403@gmail.com">
    sudharsan260403@gmail.com
  </a>
</div>


        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <span>Chennai, Tamil Nadu</span>
        </div>

        <div className="contact-item">
          <FaLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/sudharsan2604"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/sudharsan2604
          </a>
        </div>

        <div className="contact-item">
          <FaGithub className="icon" />
          <a
            href="https://github.com/sudharsan-27"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/sudharsan-2?tab=repositories
          </a>

        </div>
              <a
              href={sudharsaResume}
             target="_blank"
            className="resume-btn"
            >
                 Download Resume
            </a>
      </div>

  

    </div>
  );
};

export default Contact;
