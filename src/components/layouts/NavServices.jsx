import React from "react";
import { NavLink } from "react-router-dom";
import '../peyes/ServicesAll.css'

//A JSON is created where the words are passed for each main view and the direction of the navigation menu route
const navS = [
  {
    display: "Todos",
    path: "/servicios",
  },
  {
    display: "Escolar",
    path: "/escolar",
  },
  {
    display: "Terapias",
    path: "/terapias",
  },
];

const NavServices = () => {
  return (
    <div>
      <div className="containerCategories">
        <div className="categoriesName">
          <p>Categorias</p>
        </div>
      </div>

      <div className="containerNavs">
        {/* The JSON navS is mapped where the route direction is indicated through the properties and how
       key is used the index. The display property of the nav is shown*/}
        {navS.map((item, index) => (
          <NavLink className="navLink" to={item.path} key={index}>
            {item.display}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavServices;
