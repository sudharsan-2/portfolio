import "./Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>

      <div className="education-list">

        <div className="education-item">
          <h3>Bachelor of Engineering (Electrical & Electronics)</h3>
          <p className="college">
            K. Ramakrishnan College of Engineering, Trichy
          </p>
          <p className="year">2020 – 2024</p>
          <p className="score">CGPA: 7.6</p>
        </div>

        <div className="education-item">
          <h3>Higher Secondary Certificate (HSC)</h3>
          <p className="college">
            Raja Vignesh Higher Secondary School, Ariyalur
          </p>
          <p className="year">2019 – 2020</p>
          <p className="score">Percentage: 70%</p>
        </div>

        <div className="education-item">
          <h3>Secondary School Leaving Certificate (SSLC)</h3>
          <p className="college">
            Raja Vignesh Higher Secondary School, Ariyalur
          </p>
          <p className="year">2017 – 2018</p>
          <p className="score">Percentage: 75%</p>
        </div>

      </div>
    </div>
  );
};

export default Education;
