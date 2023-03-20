import React from "react";

const Features = ({ language }) => {
    return (
        <div className="content_container" style={{backgroundColor: "#131520"}} id="features">

            <p className="content_heading">{language.features_heading}</p>

            <p className="content_text">{language.features_text}</p>

        </div>
    )
}

export default Features