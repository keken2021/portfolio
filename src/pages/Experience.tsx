const journeyItems = [
  {
    period: "Jan 2026 - June 2026",
    role: "Software Developer Intern",
    company: "Ray Business Technologies",
    description:
      "Spearheading modern application development using .NET and React stacks, focusing on enterprise-scale solutions and cloud integration.",
    isCurrent: true,
  },
  {
    period: "2024 - 2025",
    role: "Full Stack Projects & Development",
    company: "Independent/Enterprise Collaborations",
    description:
      "Designed and delivered high-impact systems like Ciudad App and Fabric Transformer, focusing on efficiency and user satisfaction.",
    isCurrent: false,
  },
  {
    period: "2022 - 2026",
    role: "Bachelor of Science in Information Technology",
    company: "Cebu Technological University (CTU)",
    description:
      "Deep specialization in system analysis, database management, and advanced programming logic.",
    isCurrent: false,
  },
  {
    period: "2018-2020",
    role: "ICT Strand",
    company: "Asian College of Technology (ACT)",
    description: "Senior High School",
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section className="journey-section">
      <div className="journey-container">
        <h2 className="journey-heading">Professional Journey</h2>

        <div className="journey-timeline">
          {journeyItems.map((item, index) => (
            <div key={index} className="journey-item">
              <div className="journey-item-content">
                <span className="journey-period">{item.period}</span>
                <div className="journey-role-group">
                  <p className="journey-role">{item.role}</p>
                </div>
                <div className="journey-company-group">
                  <p className="journey-company">{item.company}</p>
                </div>
                {item.description && (
                  <div className="journey-description-wrapper">
                    <p className="journey-description">{item.description}</p>
                  </div>
                )}
              </div>
              <div className={`journey-dot ${item.isCurrent ? "journey-dot--active" : ""}`}>
                {item.isCurrent && <div className="journey-dot-glow" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
