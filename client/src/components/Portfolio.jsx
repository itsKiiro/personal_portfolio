import React from "react";
import "../styles/Portfolio.css";
import CardItem from "./CardItem";
import youtubeImage from "../assets/youtubeImage.jpg";
import fitnessImage from "../assets/fitnessImage.png";
import socialMediaImage from "../assets/socialMediaImage.webp";
import businessCardImage from "../assets/businessCardImage.jpg";


const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: "Youtube copy",
            description: "MERN stack project",
            imageUrl: youtubeImage,
            demoUrl: "https://youtube.crazysoziety.net",
            codeUrl: "https://github.com/itsKiiro/youtube_copy"
        },
        {
            id: 2,
            title: "Fitness portfolio",
            description: "Portfolio made with React.js",
            imageUrl: fitnessImage,
            demoUrl: "https://sandrazehentner.training",
            codeUrl: "https://github.com/itsKiiro/portfolio_website"
        },
        {
            id: 3,
            title: "Social Media App",
            description: "Lost Places/ Secret location finder! (Mobile App)",
            imageUrl: socialMediaImage,
            demoUrl: "",
            codeUrl: "https://github.com/itsKiiro/social_media_app"
        },
        {
            id: 4,
            title: "Business Card Sharing App",
            description: "Share your Business Card with people around you!",
            imageUrl: businessCardImage,
            demoUrl: "",
            codeUrl: "https://github.com/CodecoolGlobal/el-proyecte-grande-4-java-itsKiiro"
        },
        {
            id: 5,
            title: "Coming soon...",
            description: "Quiz App",
            imageUrl: "url-zum-projekt-2-bild",
            demoUrl: "",
            codeUrl: ""
        },
        {
            id: 6,
            title: "Coming soon...",
            description: "???",
            imageUrl: "url-zum-projekt-2-bild",
            demoUrl: "",
            codeUrl: ""
        },
    ];


    return (
        <div className="Portfolio" id="portfolio">
            <div className="portfolioHeader">
                <h1 style={{ color: "#fff", borderColor: "#fff" }} className="aboutStart">Portfolio</h1>
            </div>
            <div className="topDivider">
                <h4 style={{ color: "#fff", position: "absolute" }}>Have a look at my recent projects!</h4>
            </div>
            <div className="projectContainer">
                {projects.map((project) => (
                    <CardItem 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        demoUrl={project.demoUrl}
                        codeUrl={project.codeUrl}
                    />
                ))}
            </div>
            <div className="bottomDivider">
                <h4 style={{ color: "#fff", position: "absolute" }}>And many more to come!</h4>
            </div>
        </div>
    )
}

export default Portfolio;