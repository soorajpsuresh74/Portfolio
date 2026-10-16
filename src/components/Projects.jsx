import Section from "./Section";
import styles from "./Projects.module.css";

export default function Projects({ projects }) {
  return (
    <Section id="projects" number="05" title="Selected work">
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id ?? `${project.title}-${i}`} project={project} />
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
      {project.tag && <span className={styles.tag}>{project.tag}</span>}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </Wrapper>
  );
}
