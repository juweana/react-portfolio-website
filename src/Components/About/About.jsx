import "./About.css";
import me from "../../assets/me.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={me} alt="" />
        </div>
        <div className="about-left">
          <div className="about-pera">
            <p>
              During my learning journey, I have built several projects to
              strengthen my development skills, including web applications with
              authentication, REST APIs, CRUD operations, and responsive user
              interfaces. I enjoy learning by building and turning ideas into
              functional applications.
            </p>
            <p>
              I’m currently improving my skills through personal projects and
              exploring modern technologies in software development, AI, and
              automation.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              {" "}
              <p> HTML5 & CSS </p> <hr style={{ width: "70%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p> Javascript</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>React JS </p> <hr style={{ width: "55%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p> Django </p> <hr style={{ width: "65%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p> Django REST Framework </p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p> Tailwind CSS </p> <hr style={{ width: "55%" }} />{" "}
            </div>
            <div className="about-skill">
              {" "}
              <p> PostgreSQL </p> <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              <p> Docker </p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-certifications">
        <div className="about-certification">
          <h1>Data Analyst Job Ready Bootcamp</h1>
          <p>Data Solution-360</p>
        </div>

        <div className="about-certification">
          <h1>UI/UX Guided Program</h1>
          <p>Ostad</p>
        </div>
        <div className="about-certification">
          <h1>Spoken English & Phonetics</h1>
          <p>Mentors</p>
        </div>
      </div>
    </div>
  );
};

export default About;
