import React from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./Components/FrontPage";
import NavBar from "./Components/Navbar";
import Carousel from "./Components/Carousel";

const Router = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </div>
  );
};

export default Router;
