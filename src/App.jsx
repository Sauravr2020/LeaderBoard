import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/cards/Card";
// import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Card />
      {/* <Outlet /> */}
    </>
  );
};

export default App;
