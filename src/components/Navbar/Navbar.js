//React
import { useState, useEffect } from 'react';

//Style
import '../../App.css'
import LanguageSelector from './LanguageSelector/LanguageSelector';

//Custom Components
import NavbarLink from './NavbarLink/NavbarLink'

const Navbar = ({ show, language, toggleLanguage }) => {

  //State
  const [className, setClassName] = useState("navbar_container");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (show) {
      setClassName("navbar_container")
    }
    else {
      setClassName("navbar_container hide_navbar")
    }
  },[show]);

  return (
    <>

    {showMenu ? 
    <div className='menu_container'>
      <NavbarLink title={language.navbar_idea}/>
      <NavbarLink title={language.navbar_features}/>
      <NavbarLink title={language.navbar_support}/>
      <NavbarLink title={language.navbar_get_the_app}/>
      <LanguageSelector language={language} toggleLanguage={toggleLanguage}/>
    </div> : null}


    <div className={className} id="navbar">
      <div style={{maxWidth: "1200px", display: "flex", width: "100vw", padding: "1rem", marginLeft: "auto", marginRight: "auto"}}>

      <div style={{flex: 1, flexDirection: "row", display: "flex"}}>
        <img src={require("./img/icon.png")} alt='WeedStats Logo' className='logo' height={50} width={50}/>
        <div style={{width: "15px"}}></div>
        <div style={{display: "flex", alignItems: "center", height: "100%"}}>
          <p className='navbar_heading'>WeedStats</p>
        </div>
      </div>
      <div className='navbar_link_container'>
        <NavbarLink title={language.navbar_idea}/>
        <NavbarLink title={language.navbar_features}/>
        <NavbarLink title={language.navbar_support}/>
        <NavbarLink title={language.navbar_get_the_app}/>
        <LanguageSelector language={language} toggleLanguage={toggleLanguage}/>
      </div>

      <div className='navbar_menu_container' onClick={() => {showMenu ? setShowMenu(false) : setShowMenu(true)}}>
        <p>{showMenu ? 
        <i class="material-icons menu_icon">&#xe5cd;</i> 
        : <i class="material-icons menu_icon">&#xe5d2;</i>}</p>
      </div>

      </div>
    </div>
    </>
  );
}

export default Navbar;
