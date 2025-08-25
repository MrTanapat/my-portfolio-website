// src/components/Projects/Projects.jsx

import { useState } from "react";
import "./Projects.css";
import projects from "../../data/portfolioData";
import { Github, ExternalLink } from "lucide-react";

// 1. สร้างรายการฟิลเตอร์จาก technologies ทั้งหมด
// - ใช้ flatMap เพื่อแปลง array ซ้อนกันให้เป็น array เดียว
// - ใช้ new Set เพื่อเอาเฉพาะค่าที่ไม่ซ้ำกัน
const allTechnologies = [
  "All",
  ...new Set(projects.flatMap((p) => p.technologies)),
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterClick = (tech) => {
    setActiveFilter(tech);
    if (tech === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) => p.technologies.includes(tech))
      );
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="project-filters">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => handleFilterClick(tech)}
              className={`filter-btn ${activeFilter === tech ? "active" : ""}`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-techs">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
