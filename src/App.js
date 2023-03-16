//React
import { useState, useEffect } from 'react';

//Style
import './App.css';
import HeroShot from './components/HeroShot/HeroShot';
import Navbar from './components/Navbar/Navbar';

//Service
import languages from "./service/languages.json"

const App = () => {

  //State
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [language, setLanguage] = useState(languages.de);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset || yOffset < 150;
    setYOffset(currentYOffset);
    setVisible(visible);
  }

  const toggleLanguage = () => {
    language.short === "de" ? setLanguage(languages.en) : setLanguage(languages.de);
  }

  return (
  
    <div className="app_container" onScroll={() => handleScroll()}>
    
      <header>
          <Navbar show={visible} language={language} toggleLanguage={() => toggleLanguage()}/>
      </header>
    
      <HeroShot language={language}/>
      
    </div>
  );
}

export default App;
