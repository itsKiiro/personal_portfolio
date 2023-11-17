import React from "react";
import "../styles/Footer.css";

const Footer = () => {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="Footer">
            <div className="backContainer" onClick={() => scrollToSection('start')}>
                <ion-icon name="caret-up-outline"></ion-icon>
                <h2>Back To Top</h2>
            </div>
            <div className="socialLinks">
                <a href="https://linkedin.com/in/itsKiiro" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="https://instagram.com/marcel_revo" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="https://facebook.com/marcel.karall.1" target="_blank" rel="noreferrer"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://github.com/itsKiiro" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
            </div>
        </div>
    )
}


export default Footer;