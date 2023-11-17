import React from "react";
import "../styles/About.css";

const About = () => {

    return (

        <div className="About" id="about">
            <div className="aboutHeader">
                <h1 className="aboutStart">About Me</h1>
            </div>
            <div className="aboutInfo">
                <p>dsfdsfsdfdfsdhjadsadsfsdgsdgds</p>

                <h2 className="explore">Explore</h2>
            </div>
            <div className="exploreContainer_1">
                <div>
                    <h1>Design</h1> 
                    <p>blablbflf</p>
                </div>
                <div>
                    <h1>Development</h1> 
                    <p>blablbflf</p>
                </div>
            </div>
            <div className="exploreContainer_2">
                <div>
                    <h1>Maintenance</h1> 
                    <p>blablbflf</p>
                </div>

            </div>
        </div>
    )
}


export default About;