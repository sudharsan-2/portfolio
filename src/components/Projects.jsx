import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="projects-list">

        <div className="project-card">
          <h3>Library Management System</h3>
          <p className="tech">
            Java • Spring Boot • React • MySQL
          </p>
          <ul>
            <li>Developed a CRUD-based Library Management System.</li>
            <li>Implemented user authentication and authorization.</li>
            <li>Handled book issuing, returning, and availability tracking.</li>
            <li>Backend developed using Spring Boot REST APIs.</li>
            <li>Frontend built with React for user interaction.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Employee Management System</h3>
          <p className="tech">
            Java • Spring Boot • React • MySQL
          </p>
          <ul>
            <li>Designed a CRUD-based system to manage employee details.</li>
            <li>Implemented user authentication for secure access.</li>
            <li>Performed Create, Read, Update, and Delete operations.</li>
            <li>Integrated backend APIs with React frontend.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Todo List Application</h3>
          <p className="tech">
            Java • Spring Boot • React • MySQL
          </p>
          <ul>
            <li>Developed a CRUD-based Todo List application.</li>
            <li>Implemented user authentication and task management.</li>
            <li>Users can add, update, delete, and track tasks.</li>
            <li>Spring Boot used for backend REST services.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Projects;
