import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./../App";
import Welcome from "./Welcome/Welcome";
const PageRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoute;
