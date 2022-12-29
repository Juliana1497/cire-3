import React, { Component } from "react";
import "./Home.css";
import FonHome from "../../img/Home.jpg";
import Uno from "../../img/1.jpg";
import Dos from "../../img/2.jpg";
import Tres from "../../img/3.jpeg";
import Cuatro from "../../img/4.jpeg";
import Cinco from "../../img/5.jpeg";
import Seis from "../../img/6.jpeg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="containerTitle">
          <img src={FonHome} className="imgFundation" alt="Imagen Fundación" />
          <div className="titleHome">
            <p>Centro Integral de Rehabilitación Escolar</p>
          </div>
        </div>
        <div className="back">
          <p className="description">
            CIRÉ, Arte y Cultura; es un Centro Integral de Rehabilitación
            Escolar que a través de actividades artisticas y culturales como lo
            son las artes plasticas, danzas y creaciones teatrales y poeticas,
            busca la transmisión, adquisición y producción del saber y del
            conocimiento, el cual será aplicado en las diferentes comunidades en
            las cuales interactúan los niños, adolescentes, jóvenes y adultos en
            la sociedad. Compuesto por un grupo interdisciplinario, de personas
            con capacidades únicas, que al unir sus habilidades, logran un plan
            de trabajo tanto individual, como colectivo.
          </p>
          <div className="containerPhoto">
            <div className="photoHome">
              <img src={Uno} className="imgHome" alt="Imagen fundación" />
            </div>
            <div className="photoHome">
              <img src={Dos} className="imgHome" alt="Imagen fundación" />
            </div>
            <div className="photoHome">
              <img src={Tres} className="imgHome" alt="Imagen fundación" />
            </div>
            <div className="photoHome">
              <img src={Cuatro} className="imgHome" alt="Imagen fundación" />
            </div>
            <div className="photoHome">
              <img src={Cinco} className="imgHome" alt="Imagen fundación" />
            </div>
            <div className="photoHome">
              <img src={Seis} className="imgHome" alt="Imagen fundación" />
            </div>
          </div>
        </div>
        <div className="buttonServices">
          {/* The route that will be taken when clicked is indicated */}
          <Link to="/servicios" className="buttonServ">
            <p>Servicios</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
