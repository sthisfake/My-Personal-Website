import "./App.css";
import Navbar from "./components/navbar";
import React, { Component } from "react";
import FirstPage from "./pages/firstpage";
import SecondPage from "./pages/secondPage";
import MainPage from "./pages/mainPage";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
