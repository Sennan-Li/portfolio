import checkmarkLight from '../../assets/checkmark_light.png'
import arrowLight from '../../assets/arrow_light.png';
import checkmarkDark from '../../assets/checkmark_dark.png'
import arrowDark from '../../assets/arrow_dark.png';

const Experience = ({theme}) => {
    return (
      <section id="experience">
        <p className="section-text-p1">Explore My</p>
        <h1 className="section-text-title">Experience</h1>
        <div className='section-container'>

            <div className="grid-container" id="experience-grid">

              <div className="grid-item-container">
                <h2 className="experience-sub-title">Core Data Analysis Skills:</h2>
                <div className="grid-item-article-container">
                <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Data Cleaning</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Data Analytics</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Data Visualization</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Predictive Modeling</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon"/>
                    <div>
                      <h3>Machine Learning</h3>
                      
                    </div>
                  </article>
                </div>
              </div>

              <div className="grid-item-container">
                <h2 className="experience-sub-title">Technical Tools & Platforms:</h2>
                <div className="grid-item-article-container">
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Excel</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon"/>
                    <div>
                      <h3>Power BI</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Tableau</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>PostgreSQL</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Python</h3>
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Git (Version Control)</h3>
                    </div>
                  </article>
                </div>
              </div>
              
            </div>
        

        </div>

        <img className="icon arrow" src={theme=="light"?arrowDark:arrowLight} alt="Arrow icon"/>
    </section>
    )
}

export default Experience;