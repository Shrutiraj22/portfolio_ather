import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="section-container contact-layout">
      <div><div className="section-kicker">05 — THE NEXT CHAPTER</div><h2 className="contact-title">Have a thoughtful<br/><em>problem to solve?</em></h2><p className="contact-copy">I’m interested in opportunities where design, AI, and engineering meet. Let’s connect and explore what we could build.</p></div>
      <div className="contact-card">
        <span className="small-label">GET IN TOUCH</span>
        <a className="contact-primary" href="mailto:shrutirajjmp@gmail.com">shrutirajjmp@gmail.com <ArrowUpRight size={18}/></a>
        <div className="contact-links">
          <a href="https://github.com/Shrutiraj22" target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={14}/></a>
          <a href="https://www.linkedin.com/in/shruti-raj-39b41828a" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={14}/></a>
        </div>
        <div className="location-line"><MapPin size={16}/> Chennai, India</div>
      </div>
    </div>
  </section>
);

export default Contact;
