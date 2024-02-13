import React from 'react';
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container py-2">
        <Link className="navbar-brand" to="/">
          Resume Analyser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-middle" id="navbarNav">
          <ul className="navbar-nav ms-auto nav_ul align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <div className="mx-3">
              <button type="button" className="btn1 ms-2">
                Login
              </button>
              <button type="button" className="btn2 ms-2">
                Sign Up
              </button>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
