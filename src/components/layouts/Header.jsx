import React, { useContext } from "react";
import Logo from "../../img/Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { DataContext } from "../../data/DataProvider"; //The DataContex is called to make use of the product data
import { Link } from "react-router-dom";

const Header = () => {
  const value = useContext(DataContext); //The constant is used to be able to consume the data within the context
  const [cart] = value.cart; //value.cart is the constant to bring up the cart functionality
  return (
    <div className="containerHeader">
      <div className="imgTitle">
        <img src={Logo} className="imgHeader" alt="Logo CIRÉ" />
        <p className="titleHeader">CIRÉ-FuPaís</p>
      </div>
      <div className="totalCart">
        <div className="navHeader">
          <div>
            {/* The route that will be taken when clicked is indicated */}
            <Link to="/inicio">
              <p>Inicio</p>
            </Link>
          </div>
          <div>
            {/* The route that will be taken when clicked is indicated */}
            <Link to="/servicios">
              <p>Servicios</p>
            </Link>
          </div>
        </div>
        {/* The route that will be taken when clicked is indicated */}
        <Link to="/carrito">
          <FaShoppingCart className="iconCartHeader" />
        </Link>
        {/* the total of the products inside the cart array, the .length adds the number of products */}
        <span>{cart.length}</span>
      </div>
    </div>
  );
};

export default Header;
