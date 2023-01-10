import React from "react";
import NavServices from "../layouts/NavServices";
import "./ServicesAll.css";
import CardCategories from "../layouts/CardCategories";
import Data from "../../data";

const ServicesTherapies = () => {
  //The category is filtered from the Data and if it is equal to Terapias it returns itself
  const buildCategories = () => {
    const school = Data.services.filter((dato) => dato.category === "Terapias");
    return school;
  };

  return (
    <div>
      <div>
        <NavServices />
      </div>
      <div>
        <div className="containerCards">
          {/* Therapies products are mapped, where the i property is used to call each property
           from data to show it*/}
          {buildCategories().map((i) => (
            <CardCategories
              key={i.id}
              id={i.id}
              image={i.image}
              name={i.name}
              price={i.price}
              conditions={i.conditions}
              category={i.category}
              category2={i.category2}
              description={i.description}
              aomunt={i.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesTherapies;
