import './App.scss';
import Header from './components/header/header';
import Profile from './components/main/profile';
import About from './components/main/about';
import Experience from './components/main/experience';
import Projects from './components/main/projects';
import Contact from './components/main/contact';
import Footer from './components/footer/footer';

function toggleMenu() {
  document.querySelector(".menu-links").classList.toggle("open");
  document.querySelector(".hamburger-icon").classList.toggle("open");
}
function App() {
  return (
    <div className="app">
      <Header onToggle={toggleMenu} />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
