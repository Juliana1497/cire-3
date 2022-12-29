import React from "react";
import "./App.css";
import Layout from "./components/layouts/Layout";
import { DataProvider } from "./data/DataProvider";

function App() {
  return (//The parent component DatProvider is passed so that the child components can use it and call the API
    <DataProvider>
      <div>
        {/* The layout component that contains the components that will be displayed in all views of the page is called. */}
        <Layout />
      </div>
    </DataProvider>
  );
}

export default App;
