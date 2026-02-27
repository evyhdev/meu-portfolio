import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Process from './components/Process'; 
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Process /> 
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;