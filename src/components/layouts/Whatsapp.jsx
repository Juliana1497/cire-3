import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";//The DataContex is called to make use of the product data
import '../peyes/Summary.css'

const Whatsapp = () => {
  const value = useContext(DataContext);//The constant is used to be able to consume the data within the context
  const [cart] = value.cart;//value.cart is the constant to bring up the cart functionality
  const [total] =value.total;//The total is called to use the total of the sum of the prices and the quantity of each product inside the cart 

  //The function is created for when you are redirected to whatsapp at the end of the purchase
  const finalizePurchase =() =>{
    let productsWsp = cart.map(product => `- ${product.name}, Cantidad: ${product.amount}, Total servicio: $${product.price * product.amount}`);//A variable is created where the data that is in the cart matrix is mapped through the product property.
    const productsFormat = productsWsp.join('\n'); // A constant is created to give a spacing to each product inside the cart
    //The link is shown to redirect to the WhatsApp chat of the foundation's number and what the automatic message will say next to the products and the total to be paid
    window.location.href ='https://api.whatsapp.com/send?phone=573215398569&text=Me%20interesan%20los%20siguientes%20servicios' +productsFormat+'Total a pagar: '+total
  }
  return (
    //the onClick event is used to save the whatsapp redirect function
    <div className="buttonPay"><p onClick={() =>finalizePurchase()}>Pagar</p></div>
  )

}

export default Whatsapp