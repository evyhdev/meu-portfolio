import { education, experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="experience" id="formacao">
      <div className="container">
        <p className="section-kicker center">Trajetória</p>
        <h2 className="section-title">Formação e Experiência</h2>
        <div className="experience-grid">
          <section className="experience-column" aria-labelledby="education-title">
            <h3 className="column-title" id="education-title">Formação</h3>
            <div className="timeline">
              {education.map((item) => (
                <div key={item.id} className="timeline-item">
                  <h3>{item.title}</h3>
                  <p className="local">{item.institution}</p>
                  <span className="ano">{item.period}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="experience-column" aria-labelledby="experience-title">
            <h3 className="column-title" id="experience-title">Experiência</h3>
            {experiences.map((item) => (
              <div className="timeline-item" key={item.id}>
                <h3>{item.title}</h3>
                <p className="local">{item.organization}</p>
                <span className="ano">{item.period}</span>
                <ul className="activity-list">
                  {item.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
