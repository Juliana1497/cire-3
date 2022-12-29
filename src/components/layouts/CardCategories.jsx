import React, {useContext} from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { DataContext } from "../../data/DataProvider";//The DataContex is called to make use of the product data
import Swal from 'sweetalert2';

const CardCategories = ({ id, image, name, price, conditions, description }) => {//The props are passed from ServicesAll.jsx to be able to use them
const value = useContext(DataContext);//The constant is used to be able to consume the data within the context
const addCart = value.addCart;//value.addCart is the constant to add the products to the cart

//Fetched from the sweetalert library to show the description of each service in an alert
const alert = () =>{
  Swal.fire({
    title: (name),
    text: (description),
    background: '#10E351',
    color: 'black',
    confirmButtonColor: '#1BFFBC',
    confirmButtonText:'Volver',
  })
}

  return (//The props are used in the component to bring the characteristics that we need from each product
    <div className="containerServices" >
      <div className="containerService" >
        <div className="containerImgServ">
          {/* The alert function is called with the onClick event handler so that every time the image or 
          product name is clicked, the alert is displayed*/}
          <img src={image} alt="imagen fundación" onClick={() => alert()}/>
        </div>
        <div className="descriptionServices">
          <div>
            <p onClick={() => alert()}>{name}</p>
            <p>${price}</p>
            <p className="condition">{conditions}</p>
          </div>
          <div className="containerIcon">
            {/* It is used in the onClick method where the addCart function is put as id parameter */}
            <AiFillPlusCircle className="iconService" onClick={() => addCart(id)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategories;
