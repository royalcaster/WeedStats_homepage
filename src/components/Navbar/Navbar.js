//React
import { useState, useEffect } from 'react';

//Style
import '../../App.css'

const Navbar = ({ show }) => {

  const [className, setClassName] = useState("navbar_container");

  useEffect(() => {
    if (show) {
      setClassName("navbar_container")
    }
    else {
      setClassName("navbar_container hide_navbar")
    }
  },[show]);

  return (
    <div className={className} id="navbar">
      <div style={{maxWidth: "1200px", display: "flex", width: "100vw", padding: "1rem", marginLeft: "auto", marginRight: "auto"}}>

      <div style={{flex: 1, flexDirection: "row", display: "flex"}}>
        <img src={require("./img/icon.png")} alt='WeedStats Logo' className='logo' height={50} width={50}/>
        <div style={{width: "15px"}}></div>
        <div style={{display: "flex", alignItems: "center", height: "100%"}}>
          <p className='navbar_heading'>WeedStats</p>
        </div>
      </div>
      <div style={{flex: 3}}>
        <p>Navbar</p>
      </div>

      </div>
    </div>
  );
}

export default Navbar;
