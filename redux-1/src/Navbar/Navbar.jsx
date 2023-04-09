import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand">Redux</h1>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-list">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-list">
                <Link to="counter" className="nav-link">
                  Counter
                </Link>
              </li>
              <li className="nav-list">
                <Link to="message" className="nav-link">
                  Message
                </Link>
              </li>
              <li className="nav-list">
                <Link to="redux" className="nav-link">
                  redux
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
