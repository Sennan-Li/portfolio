import gitLight from '../../assets/github_light.png'
import linkedinLight from '../../assets/linkedin_light.png'
import gitDark from '../../assets/github_dark.png'
import linkedinDark from '../../assets/linkedin_dark.png'
import profileLight from '../../assets/profile-pic.png'

const Profile = ({theme}) => {
    return (
        <section id="profile">
            <img className="profile-pic" src={profileLight} alt="Sennan Li profile picture" />
            <div className="profile-text">
                <p className="section-text-p1">Hello, I'm</p>
                <h1 className="section-text-title">Sennan Li</h1>
                <p className="section-text-p2">Junior Developer</p>
                <div className="btn-container">
                    <a href="#about"><button className="btn btn-color-2" >About me</button></a>
                    <a href="#contact"><button className="btn btn-color-1" >Contact Info</button></a>
                </div>
                <div id="socials-container">
                   <a href="https://www.linkedin.com/in/sennan-li/" target='_blank'><img src={theme=="light"?linkedinDark:linkedinLight} alt="My LinkedIn profile" className="icon" /></a> 
                   <a href="https://github.com/Sennan-Li" target='_blank'><img src={theme=="light"?gitDark:gitLight} alt="My Github profile" className="icon" /></a> 
                </div>
            </div>
      </section>
    )
}
export default Profile;