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
                  <h3>Credentials</h3>
                  <p><a target='_blank' href='https://sennanliimages.blob.core.windows.net/certifications/Microsoft Certified Excel Expert.pdf'>Microsoft Certified <strong>Excel</strong> Expert</a></p>
                  <p><a target='_blank' href='https://sennanliimages.blob.core.windows.net/certifications/Tableau Certified Desktop Specialist.pdf'><strong>Tableau</strong> Certified Desktop Specialist</a></p>
                  <p><a target='_blank' href='https://learn.microsoft.com/en-us/users/sennanli/credentials/944589ba9143442f'>Microsoft Certified <strong>Power BI</strong> Data Analysis Associate</a></p>
                  <p><a target='_blank' href='https://sennanliimages.blob.core.windows.net/certifications/Cisco Certified Support Technician Networking.pdf'>Cisco Certified Support Technician Networking (CCST)</a></p>
                </div>
                <div className="grid-item-container">
                  <img src={theme=="light"?educationDark:educationLight} alt="Education icon" className="icon" />
                  <h3>Education</h3>
                  <p>MSc Computer Science <br />University of York <br /> <br />MSc Automotive Engineering <br /> Coventry University</p>
                </div>
              </div>
              <div className="text-container">
                <p>Hi, I'm Sennan. With a background in Computer Science and hands-on experience, I focus on data analysis and visualization using Excel, Power BI, Tableau, and PostgreSQL. I'm also experienced in Python for machine learning and enjoy building data-driven solutions. Check out my work below.</p>
              </div>
            </div>
          </div>
          <img className="icon arrow" src={theme=="light"?arrowDark:arrowLight} alt="Arrow icon"/>
        </section>
    )
}

export default About;