import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { Login, MainPages } from "./containers/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<MainPages />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
