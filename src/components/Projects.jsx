import Section from "./Section";
import { projects } from "../data/portfolio";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section id="projects" number="05" title="Selected work">
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title + project.tag} project={project} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }) {
  const Wrapper = project.link ? "a" : "div";
  const extraProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper className={styles.card} {...extraProps}>
      <span className={styles.tag}>{project.tag}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className={styles.note}>// edit: add link + description</span>
    </Wrapper>
  );
}