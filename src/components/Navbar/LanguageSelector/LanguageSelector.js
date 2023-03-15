import React, { useEffect } from "react";

const LanguageSelector = ({ language, toggleLanguage }) => {

    useEffect(() => {
        console.debug(language);
    });

    return (
        <div className="language_selector_container" onClick={toggleLanguage}>
        <img 
            src={language.short == "de" ? 
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
             : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"}
            className="language_img"
        />
        </div>
    )
}

export default LanguageSelector