import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Avatar from "../avatar/Avatar";
// import Button from "../Button/Button";
import logo from "../../resources/logo-stackoverflow.png";
import search from "../../resources/magnifying-glass-solid.svg";

function Navbar() {
  var User = null;
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>

        <form>
          <img
            src={search}
            alt="search icon"
            width="18"
            className="search-icon"
          />

          <input type="text" placeholder="Search..." />
        </form>

        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Login
          </Link>
        ) : (
          <div className="logout-link">
            <Avatar
              backgroundColor="#009dff"
              px="5px"
              py="10px"
              borderRadius="50%"
              cursor="pointer"
            >
              <Link
                to="/User"
                style={{
                  color: "white",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                A
              </Link>
            </Avatar>

            <button className="nav-item nav-links">Log Out</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
