import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import './Footer.css';
import Navbar from "./Navbar";

//The footer is created, which will be repeated in all page views, where the foundation's social networks are referenced
const Footer = () =>{
    return(
        <div className="containerFooter">
            <div className="iconsSocial">
                <a href="https://www.facebook.com/people/Cir%C3%A8-Cir%C3%A8/100078924317356/"><BsFacebook className="iconFooter"/></a>
                <a href="https://www.instagram.com/cirefupais/"><BsInstagram className="iconFooter"/></a>
                <a href="https://twitter.com/CFupais"><FaTwitterSquare className="iconFooter"/></a>
                <a href="https://www.youtube.com/@cirefupais8941"><BsYoutube className="iconFooter"/></a>
            </div>
            <div>
                <p className="contact">Contacto:+57 3215398569 - ciremirefuerzoescolar@gmail.com
                <br/>Dirección: Calle 40 a sur # 93 c 15, Bogotá, Patio Bonito
                </p>
            </div>
            {/* The navigation bar below the footer is called */}
            <Navbar/>
        </div>
    )
}

export default Footer;