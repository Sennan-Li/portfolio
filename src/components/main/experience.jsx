import checkmark from '../../assets/checkmark.png'
import arrow from '../../assets/arrow.png';

const Experience = () => {
    return (
        <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className='section-container'>

          <div className="grid-container" id="experience-grid">

            <div className="grid-item-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="grid-item-article-container">
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon" />
                  <div>
                    <h3>HTML</h3>
                    
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon" />
                  <div>
                    <h3>CSS</h3>
                    
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon" />
                  <div>
                    <h3>SASS</h3>
                    
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon"/>
                  <div>
                    <h3>JavaScript</h3>
                    
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon" />
                  <div>
                    <h3>TypeScript</h3>
                    
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon" />
                  <div>
                    <h3>React</h3>
                    
                  </div>
                </article>
              </div>
            </div>

            <div className="grid-item-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="grid-item-article-container">
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon" />
                  <div>
                    <h3>PostgreSQL</h3>
                    
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon"/>
                  <div>
                    <h3>Node JS</h3>
                    
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon" />
                  <div>
                    <h3>Express JS</h3>
                    
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon" />
                  <div>
                    <h3>Git</h3>
                    
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon" />
                  <div>
                    <h3>Networking</h3>
                  </div>
                </article>
                <article>
                  <img className="icon" src={checkmark} alt="Experience icon" />
                  <div>
                    <h3>Azure</h3>
                  </div>
                </article>
              </div>
            </div>
            
          </div>
      

      </div>

      <img className="icon arrow" src={arrow} alt="Arrow icon" onclick="location.href='./#projects'"/>
    </section>
    )
}

export default Experience;