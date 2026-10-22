import { Database, Palette, Code2, ArrowUpRight } from 'lucide-react';

const About = () => (
  <section id="about" className="section-container section-block">
    <div className="section-kicker">01 — A LITTLE ABOUT ME</div>
    <div className="about-layout">
      <div><h2 className="section-title">Curious by nature.<br/><em>Intentional by design.</em></h2></div>
      <div className="about-copy">
        <p className="lead-copy">I work at the intersection of design, data, and development—turning user needs and technical possibilities into clear, useful digital experiences.</p>
        <p>As a B.Tech student in Computer Science and Engineering (Big Data Analytics) at SRM Institute of Science and Technology, I’ve worked across UX research, responsive web experiences, and AI/ML projects. I’m especially interested in how thoughtful interfaces can make intelligent systems easier to understand and use.</p>
        <a className="text-link" href="https://github.com/Shrutiraj22" target="_blank" rel="noreferrer">Explore my code <ArrowUpRight size={16}/></a>
      </div>
    </div>
    <div className="focus-grid">
      <article className="focus-card"><div className="focus-icon"><Palette size={20}/></div><span className="card-index">01</span><h3>Human-centered design</h3><p>UX research, wireframing, responsive interfaces, usability testing, and design consistency.</p></article>
      <article className="focus-card"><div className="focus-icon"><Database size={20}/></div><span className="card-index">02</span><h3>AI & data systems</h3><p>Exploring computer vision, NLP, analytics pipelines, and ways to make complex information actionable.</p></article>
      <article className="focus-card"><div className="focus-icon"><Code2 size={20}/></div><span className="card-index">03</span><h3>Design meets engineering</h3><p>Building with frontend technologies and connecting interface decisions to real functionality.</p></article>
    </div>
    <div className="education-strip"><div><span className="small-label">EDUCATION</span><h3>B.Tech, Computer Science & Engineering</h3><p>Big Data Analytics · SRM Institute of Science and Technology, Chennai</p></div><div className="education-meta"><strong>8.5/10</strong><span>CGPA · 2023—2027</span></div></div>
  </section>
);

export default About;
