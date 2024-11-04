
import contactLight from '../../assets/linkedin_light.png'
import emailLight from '../../assets/email_light.png'
import contactDark from '../../assets/linkedin_dark.png'
import emailDark from '../../assets/email_dark.png'

const Contact = ({theme}) => {
    return (
        <section id="contact">
          <p className="section-text-p1">Get in Touch</p>
          <h1 className="section-text-title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img className="icon contact-icon email-icon" src={theme=="light"?emailDark:emailLight} alt="Email icon" />
              <p><a href="mailto:sennanli@alumni.york.ac.uk">sennanli@alumni.york.ac.uk</a></p>
            </div>
            <div className="contact-info-container">
              <img className="icon contact-icon" src={theme=="light"?contactDark:contactLight} alt="LinkedIn icon" />
              <p><a href="https://www.linkedin.com/in/sennan-li/" target='_blank'>LinkedIn</a></p>
            </div>
          </div>
      </section>
    )
}
export default Contact;