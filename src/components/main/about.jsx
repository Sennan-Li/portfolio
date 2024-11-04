import experienceLight from '../../assets/experience_light.png';
import aboutLight from '../../assets/logo_light.GIF';
import educationLight from '../../assets/education_light.png';
import arrowLight from '../../assets/arrow_light.png';
import experienceDark from '../../assets/experience_dark.png';
import aboutDark from '../../assets/logo_dark.GIF';
import educationDark from '../../assets/education_dark.png';
import arrowDark from '../../assets/arrow_dark.png';

const About = ({theme}) => {
    return (
        <section id="about">
          <p className="section-text-p1">Get To Know More</p>
          <h1 className="section-text-title">About Me</h1>
          <div className="section-container">
            <img className="about-pic" src={theme=="light"?aboutDark:aboutLight} alt="Profile picture"/>
            <div className="about-container">
              <div className="grid-container">
                <div className="grid-item-container">
                  <img src={theme=="light"?experienceDark:experienceLight} alt="Experience icon" className="icon"/>
                  <h3>Experience</h3>
                  <p>Technical Support</p>
                  <p>Product Management</p>
                  <p>Web Development</p>
                </div>
                <div className="grid-item-container">
                  <img src={theme=="light"?educationDark:educationLight} alt="Education icon" className="icon" />
                  <h3>Education</h3>
                  <p>MSc Computer Science <br /> MSc Automotive Engineering</p>
                </div>
              </div>
              <div className="text-container">
                <p>Experienced IT professional specializing in technical support, product management, and web development. Strong background in computer networking and cloud technologies. Proficient in HTML, CSS, JavaScript, and Python. Passionate about leveraging innovative solutions to solve real-world challenges and staying ahead of industry trends. Dedicated to enhancing user experiences and optimizing IT systems.</p>
              </div>
            </div>
          </div>
          <img className="icon arrow" src={theme=="light"?arrowDark:arrowLight} alt="Arrow icon"/>
        </section>
    )
}

export default About;