export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-content">
        <h2>Vamos construir algo incrível juntos?</h2>
        <p>Estou sempre aberta para novos desafios, networking e um bom papo sobre tecnologia e design.</p>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/evelypaz/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/evyhdev" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:evelypaz2010@gmail.com">E-mail</a>
        </div>
        
        <div className="copyright">
          <p>© {new Date().getFullYear()} Evely Paz. Feito com foco no usuário.</p>
        </div>
      </div>
    </footer>
  );
}