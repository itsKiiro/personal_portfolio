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
import figmaImage from "../assets/figmaImage.png";
import cSharpImage from "../assets/cSharpImage.png";

const Skills = () => {


    return (
        <div className="Skills" id="skills">
            <div className="aboutHeader">
                <h1 className="aboutStart">Skills</h1>
            </div>
            <div className="skillContainer">
                <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                   <h1 className="fontClass">USING NOW:</h1> 
                   <div className="skillIcons_1">
                        <div className="skill">
                            <img className="skillImage" src={htmlImage} alt="skill" />
                            <h2 className="fontClassLight">HTML5</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={cssImage} alt="skill" />
                            <h2 className="fontClassLight">CSS</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={javaImage} alt="skill" />
                            <h2 className="fontClassLight">JAVA</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={javaScriptImage} alt="skill" />
                            <h2 className="fontClassLight">JAVASCRIPT</h2>
                        </div>
                   </div>
                   <div className="skillIcons_2">
                        <div className="skill">
                            <img className="skillImage" src={reactImage} alt="skill" />
                            <h2 className="fontClassLight">REACT</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={nodeImage} alt="skill" />
                            <h2 className="fontClassLight">NODE</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={gitImage} alt="skill" />
                            <h2 className="fontClassLight">GIT</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={postgresImage} alt="skill" />
                            <h2 className="fontClassLight">POSTGRES</h2>
                        </div>
                   </div>
                </div>
                <div style={{ marginTop: 100 }}>
                    <h1 className="fontClass">LEARNING:</h1>
                    <div className="skillIcons_1">
                        <div className="skill">
                            <img className="skillImage" src={typeScriptImage} alt="skill" />
                            <h2 className="fontClassLight">TYPESCRIPT</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={figmaImage} alt="skill" />
                            <h2 className="fontClassLight">FIGMA</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={cSharpImage} alt="skill" />
                            <h2 className="fontClassLight">C#</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={sassImage} alt="skill" />
                            <h2 className="fontClassLight">SASS</h2>
                        </div>
                   </div>
                </div>
                <div style={{ marginTop: 100 }}>
                    <h1 className="fontClass">OTHER SKILLS:</h1>
                    <div className="skillIcons_1">
                        <div className="skill">
                            <img className="skillImage" src={mongoImage} alt="skill" />
                            <h2 className="fontClassLight">MONGODB</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={reactNativeImage} alt="skill" />
                            <h2 className="fontClassLight">REACT NATIVE</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={sqlImage} alt="skill" />
                            <h2 className="fontClassLight">MYSQL</h2>
                        </div>
                        <div className="skill">
                            <img className="skillImage" src={springImage} alt="skill" />
                            <h2 className="fontClassLight">SPRING</h2>
                        </div>
                   </div>
                </div>

            </div>
        </div>
    )
}


export default Skills;