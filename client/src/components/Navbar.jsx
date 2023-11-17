import React from "react";


const Navbar = () => {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="Navbar">
            <nav className="navContainer">
                <div className="logoContainer">
                    <h1>Let's Dev!</h1>
                </div>
                <ul className="navLinks">
                    <li className="navLink" onClick={() => scrollToSection('about')}>About me</li>
                    <li className="navLink" onClick={() => scrollToSection('skills')}>Skills</li>
                    <li className="navLink" onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                    <li className="navLink" onClick={() => scrollToSection('contact')}>CONTACT ME</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;