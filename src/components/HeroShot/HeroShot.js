//React
import { useEffect } from 'react';

//Style
import '../../App.css'

const HeroShot = ({ language }) => {

  //State
  

  useEffect(() => {
   
  },[]);

  return (
    <div className='content_container' style={{padding: "0px"}}>
        <div className='heroshot_gif_container' style={{padding: "20px", height: "100vh", display: "flex", flexDirection: "row"}}>
    
        

        <div style={{flex: 1, display: "flex", flexDirection: "column"}}>

        <div style={{flex: 1}}></div>

        <div style={{flex: 2, display: "flex", alignItems: "center", padding: "20px", textAlign: "center"}}>
            {language.short === "de" ? 
            <p className='heroshot_heading'>Das Werkzeug zum
            <span style={{fontSize: "2.5rem", color: "#26FF72"}}> Erfassen,</span>
            <span style={{fontSize: "2.5rem", color: "#FFBB24"}}> Auswerten </span>&
            <span style={{fontSize: "2.5rem", color: "#FC2044"}}> Teilen </span>
            deines Konsums</p>
            : 
            <p className='heroshot_heading'>The tool for 
            <span style={{fontSize: "2.5rem", color: "#26FF72"}}> Tracking,</span>
            <span style={{fontSize: "2.5rem", color: "#FFBB24"}}> Evaluating </span>& 
            <span style={{fontSize: "2.5rem", color: "#FC2044"}}> Sharing </span> 
            your consumption</p>}
        </div>

        <div style={{flex: 2, display: "flex", alignItems: "center"}}>
            <a className='heroshot_download_button' href='#gettheapp' title={language.navbar_get_the_app}>{language.navbar_get_the_app}</a>
        </div>

        </div>

        <div className='heroshot_smartphone_container'>
            .<img className='heroshot_smartphone_img' src={require("../../img/smartphone.png")} />
        </div>

        </div>
    </div>
  );
}

export default HeroShot;
