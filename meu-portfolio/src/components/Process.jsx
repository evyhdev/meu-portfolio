export default function Process() {
  const etapas = [
    {
      id: 1,
      icone: '🔍',
      titulo: '1. Descoberta & UX',
      texto: 'Entendimento profundo do problema, pesquisa de usuários e arquitetura de informação antes de desenhar o primeiro pixel.'
    },
    {
      id: 2,
      icone: '🎨',
      titulo: '2. UI Design & Prototipação',
      texto: 'Criação de interfaces no Figma focadas em usabilidade, acessibilidade e construção de Design Systems escaláveis.'
    },
    {
      id: 3,
      icone: '💻',
      titulo: '3. Desenvolvimento Front-end',
      texto: 'Transformação do protótipo em código limpo, componentizado e de alta performance utilizando React e TypeScript.'
    }
  ];

  return (
    <section className="process" id="processo">
      <div className="container">
        <h2 className="section-title">Como eu trabalho</h2>
        <div className="process-grid">
          {etapas.map((etapa) => (
            <div key={etapa.id} className="process-card">
              <div className="process-icon">{etapa.icone}</div>
              <h3>{etapa.titulo}</h3>
              <p>{etapa.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}