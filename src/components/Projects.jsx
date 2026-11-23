import { projectGroups } from '../data/projects.jsx'

export default function Projects() {
  return (
    <section id="projects">
      <h1>My Projects</h1>

      {projectGroups.map((group) => (
        <div className="project-info" id={group.id} key={group.id}>
          <h3>{group.title}</h3>
          <div className="project-container">
            {group.projects.map((p) => (
              <div className="project" key={p.title}>
                <h5>
                  {p.title}
                  {p.badges.map((b) => (
                    <span key={b.type}>
                      {' '}
                      <span className={`${b.type}-badge`}>{b.text}</span>
                    </span>
                  ))}
                </h5>
                <p>{p.description}</p>
                {p.image && (
                  <a href={p.href} target="_blank" rel="noreferrer">
                    <img src={p.image} className="project-img" alt={p.alt} />
                  </a>
                )}
                <p className="project-links">
                  <a href={p.repo ?? p.href} target="_blank" rel="noreferrer">
                    GitHub repository →
                  </a>
                  {p.repo && (
                    <>
                      {' · '}
                      <a href={p.href} target="_blank" rel="noreferrer">
                        Live site →
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
