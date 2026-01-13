import "./About.css";
import profileImg from "../assets/sudharsan.jpg"; // change name if needed

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={profileImg} alt="Sudharsan" />
      </div>

      <div className="about-content">
        <h2>About Me</h2>

        <p>
          I am <strong>Sudharsan</strong>, an aspiring <strong>Software Developer </strong>
          with a strong foundation in <strong>Java</strong> and a growing interest in
          Full stack development.
        </p>

        <p>
          I enjoy solving problems, learning new technologies, and building
          clean, user-focused applications. I am actively improving my skills
          in web development and programming fundamentals.
        </p>

        <p>
          I am looking for an opportunity where I can learn from experienced
          professionals and contribute meaningfully to real-world projects.
        </p>
      </div>
    </div>
  );
};

export default About;
