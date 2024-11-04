import themeDark from '../../assets/theme_dark.png'
import themeLight from '../../assets/theme_light.png'
const Header = ({onMenuToggle, onThemeToggle, theme}) => {
    return (
        <header>
        <nav id='desktop-nav' >
          <div className='logo'>Sennan Li</div>
          <div>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li ><img onClick={onThemeToggle} className='icon clor-icon' src={theme=="light"?themeDark:themeLight} alt="Color theme icon" /></li>
            </ul>
          </div>
        </nav>

        <nav id="hamburger-nav">
          <div className="logo">Sennan Li</div>
          <div className="hamburger-menu">
            <div className="hamburger-icon" onClick={onMenuToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menu-links">
              <li><a href="#about" onClick={onMenuToggle}>About</a></li>
              <li><a href="#experience" onClick={onMenuToggle}>Experience</a></li>
              <li><a href="#projects" onClick={onMenuToggle}>Projects</a></li>
              <li><a href="#contact" onClick={onMenuToggle}>Contact</a></li>
              <li><img onClick={onThemeToggle} className='icon color-icon' src={theme=="light"?themeDark:themeLight} alt="Color theme icon" /> </li>
            </div>
          </div>
        </nav>

      </header>
    )
}

export default Header;