import git from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import profile from '../../assets/profile-pic.png'

const Profile = () => {
    return (
        <section id="profile">
            <img className="profile-pic" src={profile} alt="Sennan Li profile picture" />
            <div className="profile-text">
                <p className="section-text-p1">Hello, I'm</p>
                <h1 className="section-text-title">Sennan Li</h1>
                <p className="section-text-p2">Junior Developer</p>
                <div className="btn-container">
                    <a href="#about"><button className="btn btn-color-2" >About me</button></a>
                    <a href="#contact"><button className="btn btn-color-1" >Contact Info</button></a>
                </div>
                <div id="socials-container">
                   <a href="https://www.linkedin.com/in/sennan-li/"><img src={linkedin} alt="My LinkedIn profile" className="icon" /></a> 
                   <a href="https://github.com/Sennan-Li"><img src={git} alt="My Github profile" className="icon" /></a> 
                </div>
            </div>
      </section>
    )
}
export default Profile;