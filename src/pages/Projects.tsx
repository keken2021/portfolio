import { ArrowUpRight } from "lucide-react";
import ciudadAppImg from "../assets/ciudad_app.png";
import faceRecImg from "../assets/face_recognition.png";

const projects = [
  {
    title: "Fabric Data Transformer",
    role: "Enterprise Platform",
    description:
      "Developed and deployed the website for FDT, an enterprise Microsoft Fabric data transformation platform. Presented project outcomes directly to the CEO, CTO, and board-level stakeholders.",
    tags: ["React", "TypeScript", "Microsoft Fabric", "Azure"],
    image: null,
    demoUrl: "https://fdt.dev",
    insight: "Delivered an enterprise-grade web presence and led the stakeholder demo presentation to C-suite executives.",
  },
  {
    title: "Ciudad App",
    role: "Mobile & Web Portal",
    description:
      "A comprehensive digital ecosystem for Barangay San Roque that streamlines healthcare center services, resident medical profiling, and inventory management. Featured on the official CTU website.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Expo"],
    image: ciudadAppImg,
    demoUrl: "https://github.com/keken2021",
    insight: "Engineered a real-time scheduling algorithm reducing patient wait times by 40%.",
  },
  {
    title: "Biometric Face Recognition Login",
    role: "Authentication Service",
    description:
      "A high-security biometric login system utilising OpenCV facial landmark mapping and PostgreSQL vector matching to provide seamless password-less authentication.",
    tags: ["Python", "OpenCV", "PostgreSQL", "REST API"],
    image: faceRecImg,
    demoUrl: "https://github.com/keken2021",
    insight: "Implements secure vector hashing to prevent raw biometric data leakage.",
  },
  {
    title: "Drilab Inventory System",
    role: "Desktop Application",
    description:
      "A desktop application built with PyQT to streamline inventory tracking and operational workflow for Drilab, replacing manual processes with a structured, reliable system.",
    tags: ["Python", "PyQT", "Desktop", "SQLite"],
    image: null,
    demoUrl: "https://github.com/keken2021",
    insight: "Systematized inventory workflows, significantly reducing manual tracking errors across daily operations.",
  },
];

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {projects.map((project) => (
        <article
          key={project.title}
          className="group p-1.5 rounded-3xl border border-border bg-card shadow-soft hover:shadow-ambient hover:border-slate-300 transition-spring-slow flex flex-col h-full"
        >
          {/* Double-Bezel Inner Shell */}
          <div className="rounded-[calc(1.5rem-0.375rem)] overflow-hidden bg-surface flex flex-col h-full">

            {/* Visual Asset Block — image if available, placeholder otherwise */}
            {project.image ? (
              <div className="aspect-[16/10] overflow-hidden border-b border-border bg-muted relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
              </div>
            ) : (
              <div className="aspect-[16/10] border-b border-border bg-muted/50 flex items-center justify-center">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {project.role}
                </span>
              </div>
            )}

            {/* Typography & Details Block */}
            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400">
                  {project.role}
                </span>

                <div className="flex items-start justify-between gap-4 mt-1">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground font-display group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 w-8 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </div>

                <p className="mt-4 text-sm md:text-base text-slate-500 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Insight block */}
                <div className="mt-5 p-3.5 rounded-xl bg-card border border-border text-xs text-slate-600 leading-relaxed font-medium">
                  <span className="text-primary font-bold">Outcome: </span>
                  {project.insight}
                </div>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-card border border-border rounded-lg text-slate-500 font-medium tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </article>
      ))}
    </div>
  );
}