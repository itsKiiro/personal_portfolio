import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Start from "../components/Start";
import Info from "../components/Info";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => {


    return (
        <div className="Home">
            <Navbar />
            <Start />
            <Info />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}


export default Home;