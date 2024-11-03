import arrow from '../../assets/arrow.png';
import project1 from '../../assets/project-1.png';

const Projects = () => {
  return (
    <section id="projects">
      <p className="section-text-p1">Browse My Recent</p>
      <h1 className="section-text-title">Projects</h1>
      <div className="section-container">
        <div className="grid-container">
          <div className="grid-item-container grid-item-project-container">
            <div className="grid-item-article-container">
              <img className="project-img" src={project1} alt="Project 1" />
            </div>
            <h2 className="projects-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">Github</button>
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">Live Demo</button>
            </div>
          </div>

          <div className="grid-item-container grid-item-project-container">
            <div className="grid-item-article-container">
              <img className="project-img" src={project1} alt="Project 1" />
            </div>
            <h2 className="projects-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">Github</button>
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">Live Demo</button>
            </div>
          </div>

          <div className="grid-item-container grid-item-project-container">
            <div className="grid-item-article-container">
              <img className="project-img" src={project1} alt="Project 1" />
            </div>
            <h2 className="projects-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">Github</button>
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">Live Demo</button>
            </div>
          </div>


        </div>
      </div>

      <img className="icon arrow" src={arrow} alt="Arrow icon" onclick="location.href='./#contact'" />
    </section>
  )
}

export default Projects;