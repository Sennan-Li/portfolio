
const Header = ({onToggle}) => {
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
            </ul>
          </div>
        </nav>

        <nav id="hamburger-nav">
          <div class="logo">Sennan Li</div>
          <div class="hamburger-menu">
            <div class="hamburger-icon" onClick={onToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="menu-links">
              <li><a href="#about" onclick="onToggle()">About</a></li>
              <li><a href="#experience" onclick="onToggle()">Experience</a></li>
              <li><a href="#projects" onclick="onToggle()">Projects</a></li>
              <li><a href="#contact" onclick="onToggle()">Contact</a></li>
            </div>
          </div>
        </nav>

      </header>
    )
}

export default Header;