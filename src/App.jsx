// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Academics from "./Pages/Academics/Academics";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/academics" element={<Academics />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
