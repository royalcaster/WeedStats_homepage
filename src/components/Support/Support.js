import React from "react";

const Support = ({ language }) => {
    return (
        <div className="content_container" id="support">

            <p className="content_heading">{language.support_heading}</p>

            <p className="content_text">{language.support_text}</p>

        </div>
    )
}

export default Support