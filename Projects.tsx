import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'FACETRACE — Smart Surveillance System',
    type: 'COMPUTER VISION · INTELLIGENT SYSTEMS',
    description: 'A computer-vision project using OpenCV and DeepFace to explore facial recognition and real-time alert workflows.',
    contribution: 'Focus: recognition workflow, system behavior, and the usability and privacy considerations that accompany surveillance tools.',
    technologies: ['OpenCV', 'DeepFace'],
    slug: 'FACETRACE',
  },
  {
    number: '02',
    title: 'Cyber Threat Intelligence Dashboard',
    type: 'DATA VISUALIZATION · ANALYTICS',
    description: 'A monitoring dashboard built around cyber-log processing and anomaly detection to make security signals easier to review.',
    contribution: 'Focus: presenting complex log data in a monitoring experience and connecting data processing to useful visual insight.',
    technologies: ['PySpark', 'Elasticsearch', 'Streamlit'],
    slug: 'Cyber Threat Intelligence Dashboard',
  },
  {
    number: '03',
    title: 'SentiGuard — Toxic Comment Filter',
    type: 'NLP · RESPONSIBLE AI',
    description: 'An NLP and machine-learning project for identifying potentially toxic comments and supporting content moderation workflows.',
    contribution: 'Focus: text classification and the potential for a clear, responsible moderation experience with human oversight.',
    technologies: ['Python', 'NLP', 'Machine Learning'],
    slug: 'SentiGuard',
  },
  {
    number: '04',
    title: 'TaskFlow Productivity App',
    type: 'PRODUCT EXPERIENCE · WEB DEVELOPMENT',
    description: 'A Kanban-style task management application designed to support task organization and multi-user workflows.',
    contribution: 'Focus: workflow clarity, task organization, authentication, and an analytics-oriented product experience.',
    technologies: ['React', 'Node.js', 'JWT'],
    slug: 'TaskFlow',
  },
  {
    number: '05',
    title: 'Custom Data Warehouse',
    type: 'DATA ENGINEERING · SYSTEMS',
    description: 'A data warehouse project using a medallion architecture and an ETL pipeline for structured data processing.',
    contribution: 'Focus: scalable data organization, transformation workflows, and data-quality validation.',
    technologies: ['Apache Spark', 'Delta Lake'],
    slug: 'Custom Data Warehouse',
  },
];

const Projects = () => (
  <section id="work" className="work-section">
    <div className="section-container section-block">
      <div className="section-kicker">02 — SELECTED WORK</div>
      <div className="section-heading-row"><h2 className="section-title">A mix of systems<br/><em>and experiences.</em></h2><p className="section-intro">Projects that bring together design questions, intelligent technology, and practical implementation.</p></div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-main">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-contribution">{project.contribution}</p>
              <div className="tag-row">{project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
            </div>
            <div className="project-links">
              <a href="https://github.com/Shrutiraj22?tab=repositories" target="_blank" rel="noreferrer" aria-label={`Browse repositories for ${project.title}`}><Github size={18}/><span>GitHub profile</span><ArrowUpRight size={15}/></a>
            </div>
          </article>
        ))}
      </div>
      <p className="verification-note"><ExternalLink size={15}/> Repository links lead to my public repository list while individual repository URLs are verified. Project descriptions summarize work listed on my resume.</p>
      <a className="button button-dark all-work-link" href="https://github.com/Shrutiraj22?tab=repositories" target="_blank" rel="noreferrer">Browse all repositories <ArrowUpRight size={17}/></a>
    </div>
  </section>
);

export default Projects;
