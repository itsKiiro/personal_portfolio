import React, { useState, useEffect } from "react";


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    }

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

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
            <nav className="mobileNavContainer">
                <ion-icon name="menu-outline" onClick={toggleMobileMenu}></ion-icon>
            </nav>
            <div className={`mobileMenu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ion-icon name="close-outline" onClick={toggleMobileMenu}></ion-icon>
                <ul className="navLinks">
                    <li className="navLink" onClick={() => scrollToSection('about')}>About me</li>
                    <li className="navLink" onClick={() => scrollToSection('skills')}>Skills</li>
                    <li className="navLink" onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                    <li className="navLink" onClick={() => scrollToSection('contact')}>CONTACT ME</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;