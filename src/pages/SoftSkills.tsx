import type { JSX } from "react";


const skills = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    title: "Enterprise Ready",
    description: "Experienced in building tools that survive the scrutiny of C-level executives and enterprise scaling.",
    highlight: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Fast Learner",
    description: "Rapid adoption of emerging tech stacks like Next.js and Azure Services to stay at the cutting edge.",
    highlight: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>
        <line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/>
        <line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/>
      </svg>
    ),
    title: "Problem Solver",
    description: "Proven ability to reduce operational friction—achieving up to 40% efficiency gains in production environments.",
    highlight: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Modern Dev",
    description: "Committed to clean architecture, TDD, and modular frontend components for long-term maintainability.",
    highlight: false,
  },
];

export function SoftSkills(): JSX.Element {
  return (
    <div className="soft-skills-container">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-[Geist,sans-serif]">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-[#1c1c1e] rounded-2xl p-5 flex flex-col gap-3 min-h-[180px]"
        >
          <span
            className={skill.highlight ? "text-white" : "text-white"}
          >
            {skill.icon}
          </span>
          <p
            className={`text-[15px] font-medium leading-snug ${
              skill.highlight ? "text-white" : "text-white"
            }`}
          >
            {skill.title}
          </p>
          <p
            className={`text-[13px] font-normal leading-relaxed flex-1 ${
              skill.highlight ? "text-white" : "text-[#C4C7C8]"
            }`}
          >
            {skill.description}
          </p>
        </div>
      ))}
    </div>
    </div>
  );
}