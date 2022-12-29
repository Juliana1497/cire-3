import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { DataContext } from "../../data/DataProvider";//The DataContex is called to make use of the product data
import '../layouts/Navbar.css'

//Button to redirect to the cart screen
const ButtonCart = () => {
  const value = useContext(DataContext)//The constant is used to be able to consume the data within the context
  const[cart] = value.cart//value.cart is the constant to bring up the cart functionality
    return (
      <div className="menu">
        <div className="totalCart2">
          <FaShoppingCart className="buttonC" />
          {/* the total of the products inside the cart array, the .length adds the number of products */}
          <span>{cart.length}</span>
        </div>
        <p className="wordMenu">Carrito</p>
      </div>
    );
}

export default ButtonCart;
