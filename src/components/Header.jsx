import React from "react";
import { Navbar } from "react-bootstrap";
import "../Styles/Screen.css"

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <>
          <Navbar.Brand className="heading">Shopping App</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </>
      </Navbar>
    </>
  );
};

export default Header;
