import { CONTACT_LINKS } from '../data/links';
import { PROFILE } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <p className="eyebrow">{PROFILE.candidature}</p>
        <h1>{PROFILE.name}</h1>
        <h2>{PROFILE.title}</h2>
        <p>{PROFILE.headline}</p>
        
        <div className="hero-buttons">
          <a href="#projetos" className="btn">Ver Projetos</a>
          <a href={CONTACT_LINKS.portfolioDrive} target="_blank" rel="noreferrer" className="btn btn-outline">
            Portfólio Completo
          </a>
          <a href={CONTACT_LINKS.curriculo} target="_blank" rel="noreferrer" className="btn btn-outline">
            Currículo
          </a>
          <a href={CONTACT_LINKS.email} className="btn btn-ghost">Contato</a>
        </div>

      </div>
    </section>
  );
}
