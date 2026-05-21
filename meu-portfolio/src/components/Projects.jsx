import { projects } from '../data/projects';

const hasLink = (link) => Boolean(link && link.trim());

export default function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="container">
        <p className="section-kicker center">Projetos selecionados</p>
        <h2 className="section-title">Projetos em destaque</h2>
        <p className="section-subtitle">
          Projetos selecionados por conexão com UX/UI, prototipação, jogos educacionais,
          mobile, sistemas web e experiências digitais interativas.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className={`card project-card ${index < 3 ? 'project-card-featured' : ''}`}
            >
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-role">
                <strong>Minha atuação</strong>
                <span>{project.role}</span>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                {hasLink(project.detailsLink) ? (
                  <a
                    href={project.detailsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="link-projeto link-projeto-muted"
                    aria-label={`Ver detalhes do projeto ${project.title}`}
                  >
                    Ver detalhes
                  </a>
                ) : null}
                {hasLink(project.driveLink) ? (
                  <a
                    href={project.driveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="link-projeto"
                    aria-label={`Abrir pasta completa do projeto ${project.title}`}
                  >
                    Ver pasta do projeto
                  </a>
                ) : null}
                {hasLink(project.externalLink) ? (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noreferrer"
                    className="link-projeto link-projeto-primary"
                    aria-label={`${project.externalLabel} do projeto ${project.title}`}
                  >
                    {project.externalLabel}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
