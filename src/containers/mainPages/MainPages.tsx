import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Home, About, Contact, GetRate, JoinUs } from "../index";

const MainPages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getRate" element={<GetRate />} />
        <Route path="/joinUs" element={<JoinUs />} />
      </Routes>
    </>
  );
};

export default MainPages;
