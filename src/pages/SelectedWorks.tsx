import fdtImage from "../assets/fdt.jpg";
import ciudad from "../assets/Ciudad.jpg"
import periols from "../assets/periols.jpg"

const projects = [
  {
    title: "Fabric Data Transformer",
   
    description:
      "Developed and deployed the website for FDT, a Microsoft Fabric data transformation platform. Presented outcomes to CEO, CTO, and board-level stakeholders.",
    stack: ["Microsoft Fabric", "React", "Spark"],
    image: fdtImage,
    link: "https://fdt.dev",
  },
  {
    title: "Ciudad App",
    
    description:
      "Capstone project featured on the official website of Cebu Technological University. A digital website and app for Barangay San Roque that streamlines all healthcare services, appointments, resident medical profiling, and inventory management",
    link: "https://www.ctu.edu.ph/2026/01/ctu-main-ccict-equips-barangay-san-roque-personnel-with-essential-digital-skills/",
    stack: ["React Typescript", "Django", "PostgreSQL"],
    image: ciudad,
  },
  {
    title: "Biometric Recognition System",
  
    description:
      "Built a facial recognition–based biometric authentication system that provides accurate and secure access control for restricted environments.",
    stack: ["Python", "TensorFlow", "OpenCV"],
    image: "https://api.builder.io/api/v1/image/assets/TEMP/426786f3112915c84cedfea0168913739df0a7aa?width=1084",
  },
  {
    title: "Periols Management System",
    description:
      "A custom-built desktop business management system that enables administrators to manage employees, inventory, sales, and dashboard analytics while streamlining daily business operations.",
    stack: ["Python", "PyQt", "PostgreSQL"],
    image: periols,
  },
];

export function SelectedWorks() {
  return (
    <section className="selected-works-section">
      <div className="selected-works-container">
        <div className="selected-works-header">
          <div className="selected-works-title-group">
            <h2 className="selected-works-title">Selected Works</h2>
            <p className="selected-works-subtitle">
              Enterprise-grade solutions built for impact, scalability, and seamless user experiences.
            </p>
          </div>

        </div>

        <div className="selected-works-grid">
          {projects.map((project) => (
            <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-gradient" />
                
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech, i) => (
                    <span key={tech} className="project-stack-item">
                      {i > 0 && <span className="project-stack-dot">•</span>}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
