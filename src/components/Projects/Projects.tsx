import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <p className={styles.subheading}>Things I've built that I'm proud of</p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
