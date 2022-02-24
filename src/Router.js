import React from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./Components/FrontPage";
import Carousel from "./Components/Carousel";
import Banner from "./Components/Banner";
import Details1 from "./Components/Details1";
import Details2 from "./Components/Details2";
import Features from "./Components/Features";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
      <Details2 />
      <Details1 />
      <Features />
    </div>
  );
};

export default Router;
