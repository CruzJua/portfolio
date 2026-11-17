import { skills } from '../data/skills.jsx'

export default function Skills() {
  return (
    <section id="skills">
      <h1>My Skills</h1>
      <div className="skill-grid">
        {skills.map((s) => (
          <article className="skill-info" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <div className="skill-tags">
              {s.tags.map((t) => (
                <span className="skill-tag" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
