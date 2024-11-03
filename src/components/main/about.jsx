import experience from '../../assets/experience.png';
import about from '../../assets/about-pic.png';
import education from '../../assets/education.png';
import arrow from '../../assets/arrow.png';

const About = () => {
    return (
        <section id="about">
          <p className="section-text-p1">Get To Know More</p>
          <h1 className="section-text-title">About Me</h1>
          <div className="section-container">
            <img className="about-pic" src={about} alt="Profile picture"/>
            <div className="about-container">
              <div className="grid-container">
                <div className="grid-item-container">
                  <img src={experience} alt="Experience icon" className="icon"/>
                  <h3>Experience</h3>
                  <p>2+ years <br />Frontend Development</p>
                </div>
                <div className="grid-item-container">
                  <img src={education} alt="Education icon" className="icon" />
                  <h3>Education</h3>
                  <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
                </div>
              </div>
              <div className="text-container">
                <p>Experienced IT professional specializing in technical support, product management, and web development. Strong background in computer networking and cloud technologies. Proficient in HTML, CSS, JavaScript, and Python. Passionate about leveraging innovative solutions to solve real-world challenges and staying ahead of industry trends. Dedicated to enhancing user experiences and optimizing IT systems.</p>
              </div>
            </div>
          </div>
          <img className="icon arrow" src={arrow} alt="Arrow icon" onClick="location.href='./#experience'"/>
        </section>
    )
}

export default About;