import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"
import "./App.css"
import mockUsers from "./mockUsers.js";
import mockApartments from "./mockApartments.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js";

import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login"
import AptIndex from "./pages/AptIndex";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]);
  const [apartments, setApartments] = useState(mockApartments);

  return (
    <>
      <div class="header">
        {" "}
        <Header />{" "}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<AptIndex />} />
      </Routes>
      <div class="footer">
        {" "}
        <Footer />{" "}
      </div>
    </>
  );
};


export default App