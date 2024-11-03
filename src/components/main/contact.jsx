
import contact from '../../assets/linkedin.png'
import email from '../../assets/email.png'

const Contact = () => {
    return (
        <section id="contact">
          <p className="section-text-p1">Get in Touch</p>
          <h1 className="section-text-title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img className="icon contact-icon email-icon" src={email} alt="Email icon" />
              <p><a href="mailto:sennanli@alumni.york.ac.uk">sennanli@alumni.york.ac.uk</a></p>
            </div>
            <div className="contact-info-container">
              <img className="icon contact-icon" src={contact} alt="LinkedIn icon" />
              <p><a href="https://www.linkedin.com/in/sennan-li/">LinkedIn</a></p>
            </div>
          </div>
      </section>
    )
}
export default Contact;