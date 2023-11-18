import React from "react";
import "../styles/Start.css";
import Image from "../assets/ImageOfMe.jpg";

const Start = () => {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div className="Start" id="start">
            <div className="split-layout">
                <div className="left-side">
                    <div className="left-sideContainer">
                        <h1 className="startName" style={{ marginBottom: "24px" }}>Hi, I am</h1>
                        <h1 className="startName" style={{ fontSize: 40 }}>Marcel Karall</h1>
                        <h2 className="startName" style={{ opacity: "0.4" }}>Full Stack Developer</h2>

                        <img className="profileImageMobile" src={Image} alt="profile" />

                        <h1 className="startNameMobile" style={{ marginBottom: "24px", marginTop: "40px" }}>my name is Marcel</h1>
                        <h2 className="startNameMobile" style={{ opacity: "0.4" }}>I'm a Full Stack Developer</h2>

                        <div className="startIconContainer">
                            <a style={{ color: "black" }} href="https://linkedin.com/in/itsKiiro" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
                            <a style={{ color: "black" }} href="https://github.com/itsKiiro" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
                            <ion-icon name="at-outline" onClick={() => scrollToSection('contact')}></ion-icon>
                        </div>                      
                    </div>

                </div>
                <div className="right-side-container">
                    <div className="right-side">
                        <img className="profileImage" src={Image} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Start;