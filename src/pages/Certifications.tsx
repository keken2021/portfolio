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
    <section style={{ width: "100%", padding: "0 16px" }} className="sm:px-0">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 8px" }} className="sm:px-0">

        {/* Header */}
        <div className="mb-6 sm:mb-10 mt-12 sm:mt-25 px-4 sm:px-0">
          <h2
            className="text-white font-semibold text-2xl sm:text-3xl tracking-tight mb-2"
            style={{ fontFamily: "Geist, -apple-system, sans-serif" }}
          >
            Certificates and Activities
          </h2>
          <p className="text-[#C4C7C8] text-xs sm:text-sm" style={{ fontFamily: "Geist, -apple-system, sans-serif" }}>
            Validated expertise in design and development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 px-4 sm:px-0">
          {visibleCerts.map((cert, index) => (
            <a
              key={`${cert.name}-${index}`}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center sm:items-start sm:flex-col gap-3 sm:gap-4 rounded-lg sm:rounded-2xl p-3 sm:p-5 border border-white/10 bg-transparent hover:border-white/25 hover:bg-white/5 transition-all duration-200 no-underline"
              style={{ fontFamily: "Geist, -apple-system, sans-serif" }}
            >
              {/* Icon */}
              <span className="text-white shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                {cert.icon}
              </span>

              {/* Text */}
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <p className="text-white text-xs sm:text-[14px] font-medium leading-snug truncate">
                  {cert.name}
                </p>
                <p className="text-[#C4C7C8] text-[11px] sm:text-[12px] font-normal leading-snug truncate">
                  {cert.subtitle}
                </p>
              </div>

              {/* Link indicator */}
              <ExternalLink
                size={14}
                className="text-white/30 group-hover:text-white/70 transition-colors shrink-0 hidden sm:block"
              />
            </a>
          ))}
        </div>

        {certs.length > previewCount && (
          <div className="mt-4 sm:mt-5 flex justify-center px-4 sm:px-0">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              className="rounded-full border border-white/15 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}