import React, { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { DataContext } from "../../data/DataProvider";//The DataContex is called to make use of the product data
import './Cart.css';
import { NavLink } from "react-router-dom";

const Cart = () => {
  const value = useContext(DataContext);//The constant is used to be able to consume the data within the context
  const [cart, setCart] = value.cart;//value.cart is the constant to bring up the cart functionality
  const [total] = value.total;//The total is called to use the total of the sum of the prices and the quantity of each product inside the cart

  const substraction = (id) => {//Function to subtract the quantity of each product, receives an id as parameter
    cart.forEach((item) => {//change the matrix cart
      if (item.id === id) {//if the item.id is equal to the id of the parameter
        item.amount === 1 ? (item.amount = 1) : (item.amount -= 1);//If the quantity of the product is equal to 1, the quantity will be equal to 1 so that it is not negative or zero. If the quantity is different from one, subtract one
      }
      setCart([...cart]);//The new matrix cart is saved when the quantity of products is subtracted from the cart
    });
  };

  const addition = (id) => {//Function to added the quantity of each product, receives an id as parameter
    cart.forEach((item) => {//change the matrix cart
      if (item.id === id) {//if the item.id is equal to the id of the parameter
        item.amount += 1;//The quantity of the product is added
      }
      setCart([...cart]);//The new matrix cart is saved when the quantity of products is added from the cart
    });
  };

  const removeProduct = (id) => {//The function to remove each product from the cart is created, it receives the id as a parameter
    if (window.confirm("¿Quieres eliminar el servicio?")) {//alert message to confirm the deletion of the item
      cart.forEach((item, index) => {//If the product is deleted, the matrix cart is changed
        if (item.id === id) {//the item.id will be equal to the id parameter
          item.amount = 1;//the quantity will be equal to 1
          cart.splice(index, 1);//remove the product from the cart to which the id belongs
        }
      });
    }

    setCart([...cart]);//The new cart matrix is saved when the product is deleted
  };


  return (
    <div>
      <div className="containerCart">
        {/* A conditional is created where if the number of products in the cart is equal to 0 it will appear
         on the screen the text that no services have been added yet, if it is different from 0 the cart will
          be mapped */}
        {cart.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            Aun no se han añadido servicios
          </p>
        ) : (
          <>
          {/* Products are mapped to cart, where the product property is used to call each property
           from cart to show it*/}
            {cart.map((product) => (
              <div className="cardCart" key={product.id}>
                <div className="containerImag">
                  <img src={product.image} alt="Imagen fundación" className="imageCart"/>
                </div>
                <div className="containerInfo">
                  <div className="trash">
                    {/* the onClick event handler is used where the delete function is created and called
                     each product inside cart*/}
                    <BiTrash  onClick={() => removeProduct(product.id)} />
                  </div>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <p className="condition">{product.conditions}</p>
                  <div className="subAdd">
                    {/* the onClick event handler is used where the substract function is created and called
                     each product inside cart*/}
                    <button onClick={() => substraction(product.id)}>-</button>
                    <p>{product.amount}</p>
                    {/* the onClick event handler is used where the added function is created and called
                     each product inside cart*/}
                    <button onClick={() => addition(product.id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="containerContinue">
        <NavLink to={'/resumen'} className="buttonContinue">
          {/* The total of the sum of the products and the quantity of each is called */}
            <p>Continuar: ${total}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
