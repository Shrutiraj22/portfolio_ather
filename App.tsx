import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="section-container footer-inner">
          <span>© {new Date().getFullYear()} Shruti Raj</span>
          <span>Designing human-centered experiences. Building intelligent products.</span>
          <a href="https://github.com/Shrutiraj22" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
