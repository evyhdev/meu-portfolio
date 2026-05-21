import { CONTACT_LINKS } from '../data/links';

const hasLink = (link) => Boolean(link && link.trim());

export default function Contact() {
  const contactActions = [
    { label: 'E-mail', href: CONTACT_LINKS.email },
    { label: 'LinkedIn', href: CONTACT_LINKS.linkedin, external: true },
    { label: 'GitHub', href: CONTACT_LINKS.github, external: true },
    { label: 'Portfólio Completo', href: CONTACT_LINKS.portfolioDrive, external: true },
    { label: 'Currículo', href: CONTACT_LINKS.curriculo, external: true },
  ];

  return (
    <section className="contact" id="contato">
      <div className="container footer-content">
        <h2>Vamos conversar?</h2>
        <p>
          Caso queira conhecer melhor meus projetos, meu portfólio completo está organizado no
          Drive com documentos, prints, protótipos e materiais de apoio.
        </p>

        <div className="social-links">
          {contactActions
            .filter((action) => hasLink(action.href))
            .map((action) => (
              <a
                href={action.href}
                key={action.label}
                rel={action.external ? 'noreferrer' : undefined}
                target={action.external ? '_blank' : undefined}
              >
                {action.label}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
