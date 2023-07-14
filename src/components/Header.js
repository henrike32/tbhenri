import React, { useState } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    console.log("button");
  };

  return (
    <div className="header">
      <Navbar>
        <NavbarBrand href="/">
          <img src="../TBH.png" alt="logo" className="logo" />
        </NavbarBrand>
        <div className="sl-container">
          <Link to="/Signup">
            <Button className="sl-button" onClick={handleClick}>
              Sign Up
            </Button>
          </Link>
          <Link to="/Login">
            <Button className="sl-button" onClick={handleClick}>
              Login
            </Button>
          </Link>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
