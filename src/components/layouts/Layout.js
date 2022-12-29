import React from "react";
import Rutas from "../../rutas/rutas";
import Footer from "../layouts/Footer";
import Header from "./Header";

//Used to call the components that will be displayed in all views of the page
const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Rutas />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
