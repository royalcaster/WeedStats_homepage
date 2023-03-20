import React from "react";

const Idea = ({ language }) => {
    return (
        <div className="content_container" id="idea">

            <p className="content_heading">{language.idea_heading}</p>

            <p className="content_text">{language.idea_text}</p>

        </div>
    )
}

export default Idea