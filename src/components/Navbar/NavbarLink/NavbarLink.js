import React from "react";

const NavbarLink = ({ title, link, onClick }) => {
    return (
        <a className="navbar_link" onClick={() => onClick()} href={link}>{title}</a>
    )
}

export default NavbarLink