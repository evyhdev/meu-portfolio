import { PROFILE } from '../data/profile';

export default function Candidacy() {
  const { candidatureSection } = PROFILE;

  return (
    <section className="candidacy" id="candidatura">
      <div className="container">
        <div className="candidacy-card">
          <p className="section-kicker">{candidatureSection.eyebrow}</p>
          <h2>{candidatureSection.title}</h2>
          <p>{candidatureSection.text}</p>
        </div>
      </div>
    </section>
  );
}
