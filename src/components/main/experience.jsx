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
                <h2 className="experience-sub-title">Frontend Development</h2>
                <div className="grid-item-article-container">
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>HTML</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>CSS</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>SASS</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon"/>
                    <div>
                      <h3>JavaScript</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>TypeScript</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
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
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>PostgreSQL</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon"/>
                    <div>
                      <h3>Node JS</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Express JS</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Git</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Networking</h3>
                    </div>
                  </article>
                  <article>
                    <img className="icon" src={theme=="light"?checkmarkDark:checkmarkLight} alt="Experience icon" />
                    <div>
                      <h3>Azure</h3>
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