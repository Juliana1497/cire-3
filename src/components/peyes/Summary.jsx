import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";//The DataContex is called to make use of the product data
import Whatsapp from "../layouts/Whatsapp";
import "./Summary.css";

const Summary = () => {
  const value = useContext(DataContext);//The constant is used to be able to consume the data within the context
  const [cart] = value.cart; //value.cart is the constant to bring up the cart functionality
  const [total] = value.total;//The total is called to use the total of the sum of the prices and the quantity of each product inside the cart

  return (
    <div>
      <div className="containerTitleSR">
        <div className="servReq">
          <p>Servicios requeridos</p>
        </div>
      </div>
      <div className="containerSum">
        {/* A conditional is created where if the number of products in the cart is equal to 0 it will appear
         on the screen the text that no services have been added yet, if it is different from 0 the cart will
          be mapped */}
        {/* {cart.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Aun no se han añadido servicios
          </p>
        ) : (
          <> */}
            {/* Products are mapped to cart, where the product property is used to call each property
            from cart to show it*/}
            {cart.map((product) => (
              <div className="summaryCart" key={product.id}>
                <div className="containerImag">
                  <img
                    src={product.image}
                    alt="Imagen fundación"
                    className="imageCart"
                  />
                </div>
                <div className="containerInfo">
                  <p>{product.name}</p>
                  <div>
                    <p>${product.price}</p>
                    <p>Cantidad: {product.amount}</p>
                  </div>
                  <p>Total: ${product.price * product.amount}</p>
                </div>
              </div>
            ))}
          {/* </>
        )} */}
      </div>
      <div className="containerTotal">
        <p className="total">Total: ${total}</p>
        {/* The Whatsapp component is a child of the Summary component*/}
        <Whatsapp />
        <p className="redWhat">*Seras redireccionado/a a Whatsapp</p>
      </div>
    </div>
  );
};

export default Summary;
