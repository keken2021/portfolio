import { useState } from "react";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    name: "Google UX Design",
    subtitle: "Professional Certificate",
    link: "https://www.coursera.org/account/accomplishments/verify/A345YPKJSPVD",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    name: "Google Build with AI Cebu 2026",
    subtitle: "Google Developers Cebu",
    link: "https://www.linkedin.com/in/kurtken/details/certifications/",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8l4 4-4 4" />
      </svg>
    ),
    name: "Asp.Net Core 10 | True Ultimate Guide",
    subtitle: "Advanced Patterns",
    link: "https://www.udemy.com/certificate/UC-4549beb8-d69f-484f-a17f-48965ec57470/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    name: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    subtitle: "Modern Web Development",
    link: "https://www.udemy.com/certificate/UC-2ae88e68-2042-4434-833a-a5a48428c163/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    name: "Azure DevOps",
    subtitle: "Fundamentals",
    link: "https://www.udemy.com/certificate/UC-ed2a9217-d1f7-4220-bec0-8c7df567f8f3/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    name: "Querying Fundamentals with MySQL Essentials",
    subtitle: "Data Analytics Philippines",
    link: "https://drive.google.com/file/d/1TRd5RUwVDYieBwkESaz0kuzxDF0gAd49/view?usp=sharing",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
    name: "Career Paths in AI Space",
    subtitle: "AI Pilipinas",
    link: "https://drive.google.com/file/d/1Dat5gV8nqVT0bHNSxNi5gPRH0LplSLJY/view?usp=sharing",
  },

];

export function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewCount = 4;
  const visibleCerts = isExpanded ? certs : certs.slice(0, previewCount);

  return (
    <section className="certs-section">
      <div className="certs-container">

        {/* Header */}
        <div className="certs-header">
          <h2 className="certs-title">Certificates and Activities</h2>
          <p className="certs-subtitle">Validated expertise in design and development.</p>
        </div>

        {/* Cards */}
        <div className="certs-grid">
          {visibleCerts.map((cert, index) => (
            <a
              key={`${cert.name}-${index}`}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <span className="cert-card-icon">{cert.icon}</span>
              <div className="cert-card-body">
                <h3 className="cert-card-name">{cert.name}</h3>
                <p className="cert-card-subtitle">{cert.subtitle}</p>
              </div>
              <ExternalLink size={13} className="cert-card-link-icon" />
            </a>
          ))}
        </div>

        {certs.length > previewCount && (
          <div className="certs-toggle-wrapper">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className="certs-toggle-btn"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}