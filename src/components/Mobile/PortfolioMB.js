import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const PortfolioMB = () => {
  const portfolioData = [
    {
      title: "Portfolio",
      items: [
        {
          company: "CDC NSW",
          tasks: [
            "Managed campaigns to increase take-up of on-demand services and public transport.",
            "Led rebranding across all NSW bus depots.",
          ],
        },
        {
          company: "BYD Australia",
          tasks: [
            "Developed the strategic market plan for electric mobility.",
            "Built and managed social media strategy to expand brand reach.",
          ],
        },
        {
          company: "Condor Energy Ecuador",
          tasks: [
            "Founded the brand, creating its identity, values, and digital marketing strategy.",
          ],
        },
      ],
    },
    {
      title: "Internal Communications",
      items: [
        {
          company: "CDC NSW",
          tasks: [
            "Planned and executed corporate engagement strategies, ensuring alignment across departments.",
            "Coordinated rebranding efforts with internal teams.",
          ],
        },
        {
          company: "Holcim Ecuador",
          tasks: [
            "Designed and executed internal communication plans to promote sustainability and diversity.",
          ],
        },
      ],
    },
    {
      title: "Crisis Management",
      items: [
        {
          company: "CDC NSW",
          tasks: [
            "Managed communications with Transport for NSW during critical events.",
            "Liaised with media and local authorities to handle crises effectively.",
          ],
        },
        {
          company: "Holcim Ecuador",
          tasks: [
            "Executed campaigns to eradicate child labour and promote diversity.",
          ],
        },
      ],
    },
    {
      title: "Brand Identity",
      items: [
        {
          company: "Condor Energy Ecuador",
          tasks: [
            "Developed the company’s branding and digital strategy from the ground up.",
          ],
        },
        {
          company: "BYD Ecuador",
          tasks: [
            "Promoted zero-emission vehicles and led B2B brand development projects.",
          ],
        },
      ],
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section-mb">
      <div className="container">
        <h3 className="section-title">My Portfolio</h3>
        <div className="bento-grid">
          {portfolioData.map((section, index) =>
            section.items.map((item, itemIndex) => (
              <div key={`${index}-${itemIndex}`} className="grid-item">
                <h4 className="company-name">{item.company}</h4>
                <ul className="tasks-list">
                  {item.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="task">
                      {task}
                    </li>
                  ))}
                </ul>
                <a href="#Test" className="read-more">
                  Read more <FaExternalLinkAlt />{" "}
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioMB;
