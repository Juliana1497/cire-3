import React from "react";
import { NavLink } from "react-router-dom";
import ButtonHome from "../buttons/ButtonHome";
import ButtonServices from "../buttons/ButtonServices";
import ButtonCart from "../buttons/ButtonCart";
import './Navbar.css';

//A JSON is created where the buttons are passed for each main view and the direction of the navigation menu route
const nav =[
  {
    display: (ButtonHome),
    path: "/inicio",
  },
  {
    display: (ButtonServices),
    path: "/servicios",
  },
  {
    display: (ButtonCart),
    path: "/carrito",
  },
];

const Navbar = () =>{
  return(
    <div className="containerNav">
      {/* The JSON nav is mapped where the route direction is indicated through the properties and how
       key is used the index. The display property of the nav is shown */}
      {nav.map((item, index) =>(
        <NavLink
        to={item.path}
        key={index}
        >
        {item.display}
        </NavLink>
      ))}
    </div>
  )
}

export default Navbar;