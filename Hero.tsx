import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => (
  <header className="hero-shell" id="top">
    <nav className="nav-wrap" aria-label="Main navigation">
      <a className="wordmark" href="#top" aria-label="Shruti Raj home">SR<span>.</span></a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Selected work</a>
        <a href="#skills">Capabilities</a>
        <a href="#contact">Contact</a>
      </div>
      <a className="nav-cta" href="mailto:shrutirajjmp@gmail.com">Let’s talk <ArrowUpRight size={15}/></a>
    </nav>

    <div className="hero-grid section-container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> DESIGN × AI × ENGINEERING</div>
        <h1>Designing human-centered experiences.<br/><em>Building intelligent products.</em></h1>
        <p className="hero-description">I’m Shruti Raj, a Computer Science student focused on Big Data Analytics, UI/UX design, and AI-powered experiences. I bring design thinking and technical curiosity together to make complex systems feel more intuitive.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17}/></a>
          <a className="button button-light" href="mailto:shrutirajjmp@gmail.com">Contact me <ArrowUpRight size={17}/></a>
        </div>
        <div className="social-row">
          <a href="https://github.com/Shrutiraj22" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
          <a href="https://www.linkedin.com/in/shruti-raj-39b41828a" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
          <a href="mailto:shrutirajjmp@gmail.com"><Mail size={17}/> Email</a>
        </div>
      </div>
      <div className="hero-art" aria-label="Abstract illustration representing design and intelligent systems">
        <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
        <div className="art-core"><Sparkles size={29}/><span>Human<br/>in the loop</span></div>
        <div className="art-label label-top">01 / EMPATHY</div>
        <div className="art-label label-bottom">02 / INTELLIGENCE</div>
        <div className="art-chip chip-one">Observe</div><div className="art-chip chip-two">Prototype</div><div className="art-chip chip-three">Iterate</div>
      </div>
    </div>
    <div className="hero-bottom"><span>BASED IN CHENNAI, INDIA</span><span>DESIGNING WITH PURPOSE <ArrowDownRight size={14}/></span></div>
  </header>
);

export default Hero;
