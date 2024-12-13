import {
  FaAngleDoubleDown,
  FaBullhorn,
  FaBullseye,
  FaBus,
  FaHandsHelping,
  FaIndustry,
  FaLaptop,
  FaLeaf,
  FaMicrophone,
  FaPen,
  FaTasks,
} from "react-icons/fa";

export default function Skills() {
  return (
    <div id="skills" className="skills-container">
      <h3 className="section-title">Skills</h3>
      <hr />
      <div className="skills-flex">
        <section className="skills-section">
          <h4 className="skills-heading">Core Skills</h4>
          <p className="skills-description">
            A diverse set of abilities focused on communication and strategy.
          </p>
          <hr />
          <ul className="skills-list">
            <li>
              <FaBullseye
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />{" "}
              Marketing Strategy
            </li>
            <li>
              <FaMicrophone
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />{" "}
              Crisis Communications
            </li>
            <li>
              <FaHandsHelping
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />{" "}
              Stakeholder Engagement
            </li>
            <li>
              <FaPen style={{ marginRight: "8px", verticalAlign: "middle" }} />{" "}
              Copywriting in Spanish and English
            </li>
          </ul>
        </section>

        <section className="skills-section">
          <h3 className="skills-heading">Tools</h3>
          <p className="skills-description">
            Software and platforms mastered for effective project management.
          </p>
          <hr />
          <ul className="skills-list">
            <li>
              <FaAngleDoubleDown
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />{" "}
              Adobe Creative Suite
            </li>
            <li>
              <FaTasks
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />{" "}
              Trello, Monday.com
            </li>
          </ul>
        </section>

        <section className="skills-section">
          <h3 className="skills-heading">Industry Expertise</h3>
          <p className="skills-description">
            Specialized knowledge in key modern industries.
          </p>
          <hr />
          <ul className="skills-list">
            <li>
              <FaLeaf style={{ marginRight: "8px", verticalAlign: "middle" }} />{" "}
              Sustainability and Renewable Energy
            </li>
            <li>
              <FaBus style={{ marginRight: "8px", verticalAlign: "middle" }} />{" "}
              Public Transport and Electric Mobility
            </li>
          </ul>
        </section>
      </div>
      <hr />
    </div>
  );
}
