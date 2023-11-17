import React from "react";
import "../styles/Start.css";
import Image from "../assets/ImageOfMe.jpg";

const Start = () => {


    return (
        <div className="Start" id="start">
            <div class="split-layout">
                <div class="left-side">
                    <h1>Hi, I am</h1>
                    <h1 style={{ fontSize: 40 }}>Marcel Karall</h1>
                    <h2>Full Stack Developer</h2>
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