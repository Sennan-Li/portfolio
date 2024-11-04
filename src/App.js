import './App.scss';
import Header from './components/header/header';
import Profile from './components/main/profile';
import About from './components/main/about';
import Experience from './components/main/experience';
import Projects from './components/main/projects';
import Contact from './components/main/contact';
import Footer from './components/footer/footer';
import React, { useState } from 'react';




function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle("dark");;
  };

  const toggleMenu = ()=>  {
    document.querySelector(".menu-links").classList.toggle("open");
    document.querySelector(".hamburger-icon").classList.toggle("open");
    
  }

 
  return (
    <div className="app">
      <Header onMenuToggle={toggleMenu} onThemeToggle={toggleTheme} theme={theme} />
      <Profile theme={theme}/>
      <About theme={theme}/>
      <Experience theme={theme}/>
      <Projects theme={theme}/>
      <Contact theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
