export default function Experience() {
  const minhaTrajetoria = [
    { 
      id: 1, 
      titulo: 'Bacharelado em Sistemas de Informação', 
      local: 'Universidade Federal do Ceará (UFC)', 
      ano: '2024 - 2027',
      detalhe: 'Formação superior focada em alinhar tecnologia com necessidades de negócios.'
    },
    { 
      id: 2, 
      titulo: 'Técnico em Redes de Computadores', 
      local: 'EEEP Dr. Salomão Alves de Moura', 
      ano: '2021 - 2023',
      detalhe: 'Base técnica sólida em infraestrutura e computação.'
    }
  ];

  return (
    <section className="experience" id="experiencia">
      <div className="container">
        <h2 className="section-title">Minha Trajetória</h2>
        <div className="timeline">
          {minhaTrajetoria.map((item) => (
            <div key={item.id} className="timeline-item">
              <h3>{item.titulo}</h3>
              <p className="local">{item.local}</p>
              <span className="ano">{item.ano}</span>
              <p style={{ marginTop: '1rem', color: '#475569', fontSize: '0.95rem' }}>
                {item.detalhe}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}