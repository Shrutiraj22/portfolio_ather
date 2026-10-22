import { Palette, BrainCircuit, Code2, Database, Wrench } from 'lucide-react';

const groups = [
  { title: 'UI/UX & Product Design', icon: Palette, items: ['UX research', 'Wireframing', 'Responsive design', 'Usability testing', 'Figma', 'Design handoff'] },
  { title: 'AI & Machine Learning', icon: BrainCircuit, items: ['Machine learning', 'OpenCV', 'Computer vision', 'NLP'] },
  { title: 'Programming & Development', icon: Code2, items: ['Python', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js'] },
  { title: 'Data Engineering & Analytics', icon: Database, items: ['SQL', 'PySpark', 'Apache Spark', 'Delta Lake', 'Data visualization'] },
  { title: 'Tools & Platforms', icon: Wrench, items: ['Git', 'Streamlit', 'Elasticsearch', 'Power BI', 'Tableau', 'Figma'] },
];

const Skills = () => (
  <section id="skills" className="section-container section-block">
    <div className="section-kicker">03 — CAPABILITIES</div>
    <div className="section-heading-row"><h2 className="section-title">A toolkit for<br/><em>making things clear.</em></h2><p className="section-intro">A practical mix of design methods and technical tools. I choose the approach based on the problem—not a proficiency bar.</p></div>
    <div className="skills-grid">
      {groups.map(({ title, icon: Icon, items }, index) => (
        <article className="skill-card" key={title}>
          <div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="card-index">0{index + 1}</span></div>
          <h3>{title}</h3><div className="tag-row">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
