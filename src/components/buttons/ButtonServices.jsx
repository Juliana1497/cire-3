import React from "react";
import { FaUser } from "react-icons/fa";
import '../layouts/Navbar.css'

//Button to redirect to the services screen
const ButtonServices = () => {
    return (
      <div div className="menu">
        <FaUser className="buttonS" />
        <p className="wordMenu">Servicios</p>
      </div>
    );
}

export default ButtonServices;

