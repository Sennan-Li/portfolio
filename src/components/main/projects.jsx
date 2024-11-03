import arrow from '../../assets/arrow.png';
import project1 from '../../assets/project-1.jpeg';
import project2 from '../../assets/project-2.jpeg';
import project3 from '../../assets/project-3.jpeg';

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
            <h2 className="projects-sub-title project-title">Notes</h2>
            <div className="btn-container">
              <a href="https://github.com/Sennan-Li/notes-web-app.git" target='_blank'><button className="btn btn-color-2 project-btn">Github</button></a>
              <a href="https://notes.sennanli.com" target='_blank'><button className="btn btn-color-2 project-btn">Live Demo</button></a>
            </div>
          </div>

          <div className="grid-item-container grid-item-project-container">
            <div className="grid-item-article-container">
              <img className="project-img" src={project2} alt="Project 1" />
            </div>
            <h2 className="projects-sub-title project-title">To Do</h2>
            <div className="btn-container">
              <a href="https://github.com/Sennan-Li/todo-app.git" target='_blank'><button className="btn btn-color-2 project-btn">Github</button></a>
              <a href="https://todo.sennanli.com" target='_blank'><button className="btn btn-color-2 project-btn">Live Demo</button></a>
            </div>
          </div>

          <div className="grid-item-container grid-item-project-container">
            <div className="grid-item-article-container">
              <img className="project-img" src={project3} alt="Project 1" />
            </div>
            <h2 className="projects-sub-title project-title">Weather Forecast</h2>
            <div className="btn-container">
              <a href="https://github.com/Sennan-Li/weather-forecast-app.git" target='_blank'><button className="btn btn-color-2 project-btn">Github</button></a>
              <a href="https://weather-forecast-sennanli.streamlit.app" target='_blank'><button className="btn btn-color-2 project-btn">Live Demo</button></a>
            </div>
          </div>


        </div>
      </div>

      <img className="icon arrow" src={arrow} alt="Arrow icon" onclick="location.href='./#contact'" />
    </section>
  )
}

export default Projects;