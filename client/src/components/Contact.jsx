import React, { useState } from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email_id, setEmailId] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const SERVICE_ID = "*********";
    const TEMPLATE_ID = "*********";
    const USER_ID = "*********";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email_id || !message) {
            toast.error("Bitte füllen Sie alle erforderlichen Felder aus.");
            return;
        }

        let mail = {
            from_name: `${name}`,
            email_id: `${email_id}`,
            phone: `${phone}`, 
            message: `${message}`,
        };

        try {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, mail, USER_ID)
            .then((result) => {
                if (result) {
                    toast.success("Danke für die Nachricht!");
                    setName("");
                    setEmailId("");
                    setPhone("");
                    setMessage("");
                } else {
                    toast.error("Fehler! Versuche es in paar Minuten wieder.");
                }
            })
        } catch (error) {
            toast.error("Fehler! Versuche es in paar Minuten wieder.");
        }       

    }


    return (
        <div className="Contact" id="contact">
            <div className="aboutHeader">
                <h1 className="aboutStart">Contact</h1>
            </div>
            <div className="aboutInfo">
                <p>Have a project in mind? Let's talk and turn your ideas into reality.</p>


                <h2 className="explore" style={{ display: "flex", marginBottom: "40px" }}>
                    <ion-icon name="caret-down-outline">
                    </ion-icon><ion-icon name="caret-down-outline"></ion-icon>
                    <ion-icon name="caret-down-outline"></ion-icon>
                </h2>
            </div>
            <div className="inputContainer">
                <input 
                    className="contactInput" 
                    placeholder="ENTER YOUR NAME*"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required
                />
                <input 
                    className="contactInput" 
                    placeholder="ENTER YOUR EMAIL*" 
                    value={email_id}
                    onChange={(e) => setEmailId(e.target.value)} 
                    required
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
                    required
                />
            </div>
            <div className="aboutInfo" >
                <h2 onClick={handleSubmit} style={{ cursor: "pointer", marginTop: "70px" }} className="explore">SUBMIT</h2>
            </div>
            <ToastContainer />
        </div>
    )
}


export default Contact;