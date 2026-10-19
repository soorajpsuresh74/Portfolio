import { useEffect } from "react";
import styles from "./Resume.module.css";

const display = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/** Printable resume built from the same content as the site. Shown at #resume. */
export default function Resume({ content }) {
  const { personal, resume, stack, projects } = content;
  const { linkedin, github } = personal.links;

  useEffect(() => {
    window.scrollTo(0, 0);
    const previous = document.title;
    // Browsers use the title as the default file name when saving as PDF.
    document.title = `${personal.name} - Resume`;
    return () => {
      document.title = previous;
    };
  }, [personal.name]);

  return (
    <div className={styles.viewer}>
      <div className={styles.toolbar}>
        <a href="#">← Back to site</a>
        <button type="button" onClick={() => window.print()}>
          Download PDF
        </button>
      </div>

      <article className={styles.sheet}>
        <header className={styles.header}>
          <h1 className={styles.name}>{personal.name}</h1>
          <div className={styles.details}>
            {personal.address ? <address>{personal.address}</address> : <span />}
            <ul>
              {personal.phone && <li>Phone: {personal.phone}</li>}
              {personal.email && (
                <li>
                  Email: <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </li>
              )}
              {linkedin && (
                <li>
                  LinkedIn: <a href={linkedin}>{display(linkedin)}</a>
                </li>
              )}
              {github && (
                <li>
                  GitHub: <a href={github}>{display(github)}</a>
                </li>
              )}
            </ul>
          </div>
        </header>

        {resume.summary && (
          <Block title="Summary">
            <p>{resume.summary}</p>
          </Block>
        )}

        {resume.competencies.length > 0 && (
          <Block title="Key Competencies">
            <ul className={styles.competencies}>
              {resume.competencies.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Block>
        )}

        {resume.experience.length > 0 && (
          <Block title="Professional Experience">
            {resume.experience.map((job, i) => (
              <div key={i} className={styles.entry}>
                <div className={styles.row}>
                  <strong>{job.company}</strong>
                  <strong>{job.period}</strong>
                </div>
                {job.role && <strong className={styles.role}>{job.role}</strong>}
                {job.description && <p>{job.description}</p>}
              </div>
            ))}
          </Block>
        )}

        {projects.length > 0 && (
          <Block title="Projects">
            {projects.map((project, i) => (
              <div key={project.id ?? i} className={styles.entry}>
                <div className={styles.row}>
                  <strong>{project.title}</strong>
                  {project.tag && <span className={styles.tag}>{project.tag}</span>}
                </div>
                {project.description && <p>{project.description}</p>}
                {project.link && (
                  <a className={styles.link} href={project.link}>
                    {display(project.link)}
                  </a>
                )}
              </div>
            ))}
          </Block>
        )}

        <section className={`${styles.block} ${styles.columns}`}>
          <div>
            {resume.education.length > 0 && (
              <>
                <h2 className={styles.heading}>Education &amp; Certifications</h2>
                {resume.education.map((edu, i) => (
                  <div key={i} className={styles.entry}>
                    <div className={styles.row}>
                      <strong>{edu.label || edu.degree}</strong>
                      <strong>{edu.period}</strong>
                    </div>
                    {edu.label && <p>{edu.degree}</p>}
                  </div>
                ))}
              </>
            )}
          </div>

          <div className={styles.right}>
            {stack.length > 0 && (
              <>
                <h2 className={styles.heading}>Skills</h2>
                {stack.map((group) => (
                  <div key={group.group} className={styles.skill}>
                    <strong>{capitalize(group.group)}</strong>
                    <p>{group.items.join(", ")}</p>
                  </div>
                ))}
              </>
            )}

            {resume.activities.length > 0 && (
              <>
                <h2 className={`${styles.heading} ${styles.spaced}`}>Extracurricular Activities</h2>
                {resume.activities.map((activity, i) => (
                  <p key={i} className={styles.indented}>
                    {activity}
                  </p>
                ))}
              </>
            )}
          </div>
        </section>
      </article>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </section>
  );
}

const capitalize = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());
