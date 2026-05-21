import { CONTACT_LINKS } from '../data/links';
import { PROFILE } from '../data/profile';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          {PROFILE.name} — {PROFILE.title}
        </p>

        <nav className="footer-links" aria-label="Links rápidos do rodapé">
          <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={CONTACT_LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={CONTACT_LINKS.email}>E-mail</a>
        </nav>
      </div>
    </footer>
  );
}
