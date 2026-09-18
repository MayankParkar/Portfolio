import type { Project } from "../../types";
import styles from "./Projects.module.css";

interface ProjectCardProps {
  project: Project;
}
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.techList}>
        {project.techStack.map((tech) => (
          <span key={tech} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.cardLinks}>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
