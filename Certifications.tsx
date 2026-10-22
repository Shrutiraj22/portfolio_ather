import { Award, Trophy, GraduationCap, ArrowUpRight } from 'lucide-react';

const credentials = [
  { title: 'Google Data Analytics Professional Certificate', provider: 'Coursera', icon: Award },
  { title: 'Introduction to Database Management Systems', provider: 'NPTEL', icon: GraduationCap },
  { title: 'Oracle Cloud Infrastructure', provider: 'Oracle', icon: Award },
  { title: 'Python Bootcamp', provider: 'Udemy', icon: Award },
  { title: 'Introduction to Data Science', provider: 'Cisco', icon: Award },
  { title: 'Smart India Hackathon', provider: 'Top 10% — as stated on resume', icon: Trophy },
];

const Certifications = () => (
  <section id="experience" className="credentials-section">
    <div className="section-container section-block">
      <div className="section-kicker">04 — EXPERIENCE & LEARNING</div>
      <div className="section-heading-row"><h2 className="section-title">Design in practice.<br/><em>Learning in motion.</em></h2><p className="section-intro">Experience working with teams, shaping digital experiences, and iterating from feedback.</p></div>
      <div className="experience-list">
        <article className="experience-item"><div className="experience-date">MAY 2024 — JUL 2024</div><div><h3>UI/UX Design Lead <span>· Bhagalpur Silk</span></h3><p>Conducted UX research and redesigned an e-commerce experience; created responsive Figma wireframes and UI assets, and collaborated with a cross-functional team of three.</p><div className="experience-metrics"><span><strong>25%</strong> resume-reported bounce-rate reduction</span><span><strong>18%</strong> resume-reported mobile conversion improvement</span></div></div></article>
        <article className="experience-item"><div className="experience-date">OCT 2023 — MAR 2025</div><div><h3>UI/UX Designer <span>· Team Aaruush</span></h3><p>Designed and developed the college technical fest website, helped maintain visual consistency across 50+ dynamic pages, and iterated based on student feedback.</p><div className="experience-metrics"><span><strong>10+</strong> usability tests listed on resume</span><span><strong>4</strong> team members coordinated</span></div></div></article>
      </div>
      <div className="credentials-heading"><h3>Certifications & recognition</h3><span>As listed on my resume</span></div>
      <div className="credentials-grid">{credentials.map(({title, provider, icon: Icon}) => <article className="credential" key={title}><Icon size={19}/><div><h4>{title}</h4><p>{provider}</p></div><ArrowUpRight size={15} className="credential-arrow"/></article>)}</div>
    </div>
  </section>
);

export default Certifications;
