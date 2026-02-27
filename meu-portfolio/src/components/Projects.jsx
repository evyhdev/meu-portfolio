export default function Projects() {
  const meusProjetos = [
    { 
      id: 1, 
      nome: 'BarberKlub', 
      desc: 'Plataforma web para gestão inteligente de barbearias. Foco em simplificar o agendamento para o cliente e o controle para o estabelecimento.', 
      link: 'https://www.figma.com/design/2sRKaLL3gX0e3OubJpFFiq/Sem-t%C3%ADtulo?node-id=0-1&t=nBybowzX42Ygqjai-1' 
    },
    { 
      id: 2, 
      nome: 'PegaPista!', 
      desc: 'Otimização de rotas na palma da mão. App projetado sob o conceito Mobile First, garantindo ergonomia para corredores em movimento.', 
      link: 'https://www.figma.com/design/k7ti9H85Rqw8hvRAJ6UBzR/App-de-Corrida?node-id=0-1&t=HXCLkvAJlBhpp2bk-1' 
    },
    { 
      id: 3, 
      nome: 'JAS Gesso', 
      desc: 'Dashboard inteligente para a indústria. Interface projetada para facilitar a visualização de dados complexos de produção e qualidade.', 
      link: 'https://www.figma.com/design/mZlH9Iu9m9fjvRzTEKcoMq/JAS-Gesso?node-id=0-1&t=0uErjcuVX2ds6f8M-1' 
    },
    { 
      id: 4, 
      nome: 'MJ Geradores', 
      desc: 'Presença digital que gera negócios. Landing page desenhada e desenvolvida para maximizar taxas de conversão e contato.', 
      link: 'https://www.figma.com/design/DWyuR5SJ5aK5rtUpH7xPaJ/MJGeradores?node-id=0-1&t=Ivqz33gAJCsBVhDv-1' 
    }
  ];

  return (
    <section className="projects" id="projetos">
      <div className="container">
        <h2 className="section-title">Projetos em Destaque</h2>
        <div className="projects-grid">
          {meusProjetos.map((proj) => (
            <div key={proj.id} className="card">
              <h3>{proj.nome}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noreferrer" className="link-projeto">Ver Protótipo ↗</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}