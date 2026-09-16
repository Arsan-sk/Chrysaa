import { ArrowUpRight, Play } from 'lucide-react'
import { projects } from './siteData'

export function WorkSection() {
  return (
    <section id="work" className="work dark-section section-pad">
      <div className="work-header reveal">
        <p className="kicker light">Proof, not promises</p>
        <h2>
          Things we've made<br />
          <span>possible.</span>
        </h2>
        <p>Selected systems and experiences, built as concepts, products and real-world platforms.</p>
      </div>

      <div className="project-stack">
        {projects.map((project, index) => (
          <article className={`project-panel ${project.tone}`} key={project.name}>
            <div className="project-visual">
              <div className="visual-window">
                <div className="window-bar">
                  <i /><i /><i />
                </div>
                <div className="visual-lines">
                  <span /><span /><span /><span />
                </div>
                <div className="visual-orb" />
              </div>
              <span className="project-index">0{index + 1}</span>

              {/* Video Preview Hover Overlay */}
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-video-btn"
                aria-label={`Watch ${project.name} demo video`}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="project-video-icon">
                  <Play size={18} fill="currentColor" />
                </span>
                <span className="project-video-label">Watch Demo</span>
              </a>
            </div>

            <div className="project-info">
              <p>{project.kind}</p>
              <h3>{project.name}</h3>
              <span>{project.note}</span>
              <div className="project-actions">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-watch-link"
                  aria-label={`Watch ${project.name} demo`}
                >
                  <span className="project-watch-badge">
                    <Play size={11} fill="currentColor" />
                    Watch
                  </span>
                  {project.videoUrl.includes('instagram') ? 'Instagram Reel' : 'YouTube Demo'}
                  <ArrowUpRight size={14} />
                </a>
                <a href="#contact" aria-label={`Discuss ${project.name}`} className="project-discuss-link">
                  Explore case <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
