export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container" aria-label="Navegação principal">
        <a href="#inicio" className="logo">
          Evely<span>.dev</span>
        </a>
        
        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#competencias">Competências</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
