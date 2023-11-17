import React from "react";
import "../styles/Skills.css";
import gitImage from "../assets/gitImage.png";
import reactImage from "../assets/reactImage.png";
import htmlImage from "../assets/htmlImage.png";
import mongoImage from "../assets/mongoImage.png";
import nodeImage from "../assets/nodeImage.png";
import cssImage from "../assets/cssImage.png";
import javaScriptImage from "../assets/javaScriptImage.png";
import javaImage from "../assets/javaImage.png";
import postgresImage from "../assets/postgresImage.png";
import sassImage from "../assets/sassImage.png";
import typeScriptImage from "../assets/typeScriptImage.png";
import reactNativeImage from "../assets/reactNativeImage.png";
import sqlImage from "../assets/sqlImage.png";
import springImage from "../assets/springImage.png";

const Skills = () => {


    return (
        <div className="Skills" id="skills">
            <div className="aboutHeader">
                <h1 className="aboutStart">Skills</h1>
            </div>
            <div className="skillContainer">
                <div>
                   <h1>USING NOW:</h1> 
                   <div className="skillIcons_1">
                        <div className="skill">
                            <img className="skillImage" src={htmlImage} alt="skill" />
                            <h2>HTML5</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={cssImage} alt="skill" />
                            <h2>CSS</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={javaImage} alt="skill" />
                            <h2>JAVA</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={javaScriptImage} alt="skill" />
                            <h2>JAVASCRIPT</h2>
                        </div>
                   </div>
                   <div className="skillIcons_2">
                        <div className="skill">
                            <img className="skillImage" src={reactImage} alt="skill" />
                            <h2>REACT</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={nodeImage} alt="skill" />
                            <h2>NODE</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={gitImage} alt="skill" />
                            <h2>GIT</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={postgresImage} alt="skill" />
                            <h2>POSTGRES</h2>
                        </div>
                   </div>
                </div>
                <div style={{ marginTop: 100 }}>
                    <h1>LEARNING:</h1>
                    <div className="skillIcons_1">
                        <div className="skill">
                            <img className="skillImage" src={typeScriptImage} alt="skill" />
                            <h2>TYPESCRIPT</h2>
                        </div>
                        <div className="skill">
                            <h2>CSS</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={sassImage} alt="skill" />
                            <h2>SASS</h2>
                        </div>
                        <div className="skill">
                            <h2>JAVASCRIPT</h2>
                        </div>
                   </div>
                </div>
                <div style={{ marginTop: 100 }}>
                    <h1>OTHER SKILLS:</h1>
                    <div className="skillIcons_1">
                        <div className="skill">
                            <img className="skillImage" src={mongoImage} alt="skill" />
                            <h2>MONGODB</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={reactNativeImage} alt="skill" />
                            <h2>REACT NATIVE</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={sqlImage} alt="skill" />
                            <h2>MYSQL</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={springImage} alt="skill" />
                            <h2>SPRING</h2>
                        </div>
                   </div>
                </div>

            </div>
        </div>
    )
}


export default Skills;