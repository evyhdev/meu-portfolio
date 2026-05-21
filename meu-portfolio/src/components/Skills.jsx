import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section className="skills" id="competencias">
      <div className="container">
        <p className="section-kicker center">Habilidades</p>
        <h2 className="section-title">Competências</h2>
        
        <div className="skills-wrapper">
          {skillGroups.map((group) => (
            <article className="skills-box" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skills-list">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
