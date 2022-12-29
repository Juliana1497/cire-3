import React, { useContext } from "react";
import CardCategories from "../layouts/CardCategories";
import './ServicesAll.css'
import { DataContext } from "../../data/DataProvider";//The DataContex is called to make use of the product data
import NavServices from '../layouts/NavServices'

const ServicesAll = () => {
  const value = useContext(DataContext)//The constant is used to be able to consume the data within the context
  const [products] = value.products//value.products is the constant that has the data of each product

    return (
      <div>
        <div>
          <NavServices/>
        </div>
        <div className="containerCards">
          {/* Product data consumption: the product data is mapped, accessing each of these.
           The key is created which will be the id of the product. The characteristics of the
            products are passed as props */}
          {
            products.map(product =>(
              <CardCategories 
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              conditions={product.conditions}
              category={product.category}
              description={product.description}
              aomunt={product.aomunt}
              />
            ))
          }
          
        </div>
      </div>
    );
}

export default ServicesAll;
