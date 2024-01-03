import React from "react";
import logo from "../../Images/E-Commerce-Logo.jpg";
import Figure from "react-bootstrap/Figure";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";




function Header() {
  
  return (
    <>
      <div className="bg-secondary-subtle">
        <div className="header">
          <Figure.Image
            className="logo"
            width={80}
            height={50}
            alt="pic"
            src={logo}
          />
          <Navbar.Brand className="brand">E-Commerce</Navbar.Brand>
        </div>
      </div>

      <Nav
        className="bg-dark-subtle"
        fill
        variant="tabs"
        defaultActiveKey="/home"
      >
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/beauty">Beauty Products</Link>
        <Link to="/homedecor">Home Decor</Link>
        <Link to="/groceries">Groceries</Link>
  

        <form className="d-flex" role="search">
          {/* <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> */}

          <Link to="./Login">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="./Cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </form>
      </Nav>
   
    </>
  );
}

export default Header;
