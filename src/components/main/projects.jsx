import arrowLight from '../../assets/arrow_light.png';
import arrowDark from '../../assets/arrow_dark.png';



const project1 = 'https://sennanliimages.blob.core.windows.net/viz/Life_Expectancy_Estimator_in_Python.png';
const project2 = 'https://sennanliimages.blob.core.windows.net/viz/Predict_Customer_Churn_in_Python.png';
const project3 = 'https://sennanliimages.blob.core.windows.net/viz/Predict_Customer_Bookings_in_Python.png';
const project4 = 'https://sennanliimages.blob.core.windows.net/viz/TMDB_Movies_Project-Exploratory_Data_Analysis.png';
const project5 = 'https://sennanliimages.blob.core.windows.net/viz/Analyse_Customer_Churn_in_Excel.png';
const project6 = 'https://sennanliimages.blob.core.windows.net/viz/Analyse_Customer_Churn_in_Tableau.png';

const Projects = ({theme}) => {
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
            <h2 className="projects-sub-title project-title">Life Expectancy Estimator in Python</h2>
            <div className="btn-container">
              <a href="https://github.com/WHOlytics-Team/Life-Expectancy-Estimator" target='_blank'><button className="btn btn-color-2 project-btn">Github</button></a>
              <a href="https://github.com/WHOlytics-Team/Life-Expectancy-Estimator" target='_blank'><button className="btn btn-color-2 project-btn">Demo</button></a>
            </div>
          </div>

          <div className="grid-item-container grid-item-project-container">
            <div className="grid-item-article-container">
              <img className="project-img" src={project2} alt="Project 2" />
            </div>
            <h2 className="projects-sub-title project-title">Predict Customer Churn in Python</h2>
            <div className="btn-container">
              <a href="https://github.com/Sennan-Li/Customer_Churn_Prediction" target='_blank'><button className="btn btn-color-2 project-btn">Github</button></a>
              <a href="https://github.com/Sennan-Li/Customer_Churn_Prediction" target='_blank'><button className="btn btn-color-2 project-btn">Demo</button></a>
            </div>
          </div>



          <div className="grid-item-container grid-item-project-container">
            <div className="grid-item-article-container">
              <img className="project-img" src={project3} alt="Project 3" />
            </div>
            <h2 className="projects-sub-title project-title">Predict Customer Bookings in Python</h2>
            <div className="btn-container">
              <a href="https://github.com/Sennan-Li/Customer-Bookings-Prediction" target='_blank'><button className="btn btn-color-2 project-btn">Github</button></a>
              <a href="https://github.com/Sennan-Li/Customer-Bookings-Prediction" target='_blank'><button className="btn btn-color-2 project-btn">Demo</button></a>
            </div>
          </div>

          <div className="grid-item-container grid-item-project-container">
            <div className="grid-item-article-container">
              <img className="project-img" src={project4} alt="Project 4" />
            </div>
            <h2 className="projects-sub-title project-title">TMDB Movies Project - EDA in Python</h2>
            <div className="btn-container">
              <a href="https://github.com/Sennan-Li/BA-Programme.git" target='_blank'><button className="btn btn-color-2 project-btn">Github</button></a>
              <a href="https://github.com/Sennan-Li/BA-Programme.git" target='_blank'><button className="btn btn-color-2 project-btn">Demo</button></a>
            </div>
          </div>

          <div className="grid-item-container grid-item-project-container">
            <div className="grid-item-article-container">
              <img className="project-img" src={project5} alt="Project 5" />
            </div>
            <h2 className="projects-sub-title project-title">Analyse Customer Churn in Excel</h2>
            <div className="btn-container">
              <a href="https://github.com/Sennan-Li/Excel-Analyse_Customer_Churn" target='_blank'><button className="btn btn-color-2 project-btn">Github</button></a>
              <a href="https://github.com/Sennan-Li/Excel-Analyse_Customer_Churn" target='_blank'><button className="btn btn-color-2 project-btn">Demo</button></a>
            </div>
          </div>

          <div className="grid-item-container grid-item-project-container">
            <div className="grid-item-article-container">
              <img className="project-img" src={project6} alt="Project 6" />
            </div>
            <h2 className="projects-sub-title project-title">Analyse Customer Churn in Tableau</h2>
            <div className="btn-container">
              <a href="https://public.tableau.com/app/profile/sennan.li/viz/AnalyseCustomerChurninTableau/ChurnAnalysis" target='_blank'><button className="btn btn-color-2 project-btn">Tableau Public</button></a>
              <a href="https://public.tableau.com/app/profile/sennan.li/viz/AnalyseCustomerChurninTableau/ChurnAnalysis" target='_blank'><button className="btn btn-color-2 project-btn">Demo</button></a>
            </div>
          </div>

        </div>
      </div>

      <img className="icon arrow" src={theme=="light"?arrowDark:arrowLight} alt="Arrow icon" />
    </section>
  )
}

export default Projects;