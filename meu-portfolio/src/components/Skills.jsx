export default function Skills() {
  const designSkills = ['Figma', 'UX/UI Design', 'Wireframing', 'Prototipação', 'Design System', 'Pesquisa com Usuário'];
  const devSkills = ['React', 'TypeScript', 'JavaScript', 'HTML5 & CSS3', 'Vite', 'Git & GitHub'];

  return (
    <section className="skills" id="habilidades">
      <div className="container">
        <h2 className="section-title">Meu Arsenal de Ferramentas</h2>
        
        <div className="skills-wrapper">
          <div className="skills-box">
            <h3>🎨 Design & UX</h3>
            <div className="tags-container">
              {designSkills.map(skill => (
                <span key={skill} className="tag tag-design">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-box">
            <h3>💻 Front-end & Dev</h3>
            <div className="tags-container">
              {devSkills.map(skill => (
                <span key={skill} className="tag tag-dev">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}