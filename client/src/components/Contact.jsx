import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {


    }


    return (
        <div className="Contact" id="contact">
            <div className="aboutHeader">
                <h1 className="aboutStart">Contact</h1>
            </div>
            <div className="aboutInfo">
                <p>dsfdsfsdfdfsdhjadsadsfsdgsdgds</p>

                <h2 className="explore">Explore</h2>
            </div>
            <div className="inputContainer">
                <input 
                    className="contactInput" 
                    placeholder="ENTER YOUR NAME*"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    className="contactInput" 
                    placeholder="ENTER YOUR EMAIL*" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    className="contactInput" 
                    placeholder="PHONE NUMBER" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                />
                <textarea 
                    className="contactText" 
                    placeholder="YOUR MESSAGE*" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} 
                />
            </div>
            <div className="aboutInfo" >
                <h2 onClick={handleSubmit} style={{ cursor: "pointer" }} className="explore">SUBMIT</h2>
            </div>
        </div>
    )
}


export default Contact;