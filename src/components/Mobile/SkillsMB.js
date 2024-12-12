export default function SkillsMB() {
  return (
    <div id="skills-mobile" className="skills-container">
      <h3 className="section-title">Skills</h3>
      <hr></hr>
      <div className="skills-flex">
        <section className="skills-section">
          <h3 className="skills-heading">Core Skills</h3>
          <p className="skills-description">
            A diverse set of abilities focused on communication and strategy.
          </p>
          <hr></hr>
          <ul className="skills-list">
            <li>Marketing Strategy</li>
            <li>Crisis Communications</li>
            <li>Stakeholder Engagement</li>
            <li>Copywriting in Spanish and English</li>
          </ul>
        </section>

        <section className="skills-section">
          <h3 className="skills-heading">Tools</h3>
          <p className="skills-description">
            Software and platforms mastered for effective project management.
          </p>
          <hr></hr>
          <ul className="skills-list">
            <li>Adobe Creative Suite</li>
            <li>Trello, Monday.com</li>
          </ul>
        </section>

        <section className="skills-section">
          <h3 className="skills-heading">Industry Expertise</h3>
          <p className="skills-description">
            Specialized knowledge in key modern industries.
          </p>
          <hr></hr>
          <ul className="skills-list">
            <li>Sustainability and Renewable Energy</li>
            <li>Public Transport and Electric Mobility</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
