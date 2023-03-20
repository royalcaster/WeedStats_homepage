import React from "react";

const Impressum = ({ language }) => {
    return (
        <div className="content_container" style={{width: "100vw", backgroundColor: "#131520"}}>

            <p className="content_heading" style={{color: "rgba(255,255,255,0.6)"}}>{language.impressum_heading}</p>

            <p className="content_text" style={{color: "rgba(255,255,255,0.6)"}}>{language.impressum_text}</p>

        </div>
    )
}

export default Impressum