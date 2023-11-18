import React from "react";
import "../styles/CardItem.css";

const CardItem = ({ title, description, imageUrl, demoUrl, codeUrl }) => {

    const cardStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <div className="CardItem" style={cardStyle}>
            <div className="CardContent">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="CardActions">
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="CardButton demoButton">Try Demo</a>
                    <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="CardButton codeButton">View Code</a>
                </div>
            </div>
        </div>
    )
}


export default CardItem;