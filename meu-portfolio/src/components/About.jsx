import { PROFILE } from '../data/profile';

export default function About() {
  return (
    <section className="about section-band" id="sobre">
      <div className="container about-grid">
        <div>
          <p className="section-kicker">Sobre</p>
          <h2 className="section-title align-left">Quem eu sou</h2>
        </div>

        <div className="about-content">
          <p>{PROFILE.about}</p>
          <p>{PROFILE.aboutComplement}</p>

          <div className="about-highlights">
            {PROFILE.highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
