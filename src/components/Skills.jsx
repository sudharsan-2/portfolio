import "./Skills.css";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import { SiSpringboot, SiHibernate } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <FaJava className="icon java" />
          <p>Java</p>
        </div>

        <div className="skill-card">
          <FaDatabase className="icon sql" />
          <p>SQL & JDBC</p>
        </div>

        <div className="skill-card">
          <FaHtml5 className="icon html" />
          <p>HTML</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="icon css" />
          <p>CSS</p>
        </div>

        <div className="skill-card">
          <FaJs className="icon js" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <FaReact className="icon react" />
          <p>React JS</p>
        </div>

        <div className="skill-card">
          <SiSpringboot className="icon spring" />
          <p>Spring Boot</p>
        </div>

        <div className="skill-card">
          <SiHibernate className="icon hibernate" />
          <p>Hibernate</p>
        </div>

        <div className="skill-card">
          <FaTools className="icon tools" />
          <p>VS Code, Eclipse, Postman</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
