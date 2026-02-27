export default function Hero() {
  return (
    <section className="hero" id="sobre">
      <div className="container">
        <h1>Olá! Eu sou a <span className="text-gradient">Evely Paz</span></h1>
        <h2>UX/UI Designer & Frontend Developer</h2>
        <p>
          <strong>Desenvolvendo produtos digitais com propósito e performance.</strong><br/><br/>
          Minha missão é criar pontes entre as necessidades do usuário e soluções tecnológicas eficientes. 
          Como estudante da UFC e membro da AvanteTech Jr, combino a visão estratégica do Design de Interfaces 
          com a robustez do código em React, garantindo entregas que encantam visualmente e funcionam perfeitamente.
        </p>
        
        <div className="hero-buttons">
          <a href="#projetos" className="btn">Ver meus projetos</a>
          
          <a href="/Curriculo_Evely_Paz.pdf" download="Curriculo_Evely_Paz.pdf" className="btn btn-outline">
            Baixar CV
          </a>
        </div>

      </div>
    </section>
  );
}