import React from "react";
import "../styles/About.css";
import designImage from "../assets/designImage.png";
import maintenanceImage from "../assets/maintenanceImage.png";
import developmentImage from "../assets/developmentImage.png";

const About = () => {

    return (

        <div className="About" id="about">
            <div className="aboutHeader">
                <h1 className="aboutStart">About Me</h1>
            </div>
            <div className="aboutInfo">
                <p style={{ textAlign: "center", marginBottom: "70px" }}>
                    As a dedicated web professional, I specialize in creating visually appealing, highly functional websites. My focus is on delivering user-friendly designs and efficient development solutions, ensuring that each project is both aesthetically pleasing and technologically robust.
                </p>

                <h2 className="explore">Explore</h2>
            </div>
            <div className="exploreContainer_1">
                <div className="aboutBoxContainer">
                    <div className="aboutBox">
                        <img 
                            src={designImage} 
                            className="aboutBoxImage"
                            alt="design"
                        />
                        <h2 className="aboutFont">DESIGN</h2> 
                    </div>
 
                    <p>I can design the site based on your needs and suggestions.</p>
                </div>
                <div className="aboutBoxContainer">
                    <div className="aboutBox">
                        <img 
                            src={developmentImage} 
                            className="aboutBoxImage"
                            alt="design"
                        />
                        <h2 className="aboutFont">DEVELOPMENT</h2> 
                    </div> 
                    <p>I create responsive and functional websites with clean code,
                        <br />
                        focusing on user experience and performance.</p>
                </div>
            </div>
            <div className="exploreContainer_2">
                <div className="aboutBoxContainer">
                    <div className="aboutBox">
                        <img 
                            src={maintenanceImage} 
                            className="aboutBoxImage"
                            alt="design"
                        />
                        <h2 className="aboutFont">MAINTENANCE</h2> 
                    </div> 
                    <p>I provide ongoing support to ensure your site remains up-to-date and runs smoothly over time.</p>
                </div>

            </div>
        </div>
    )
}


export default About;