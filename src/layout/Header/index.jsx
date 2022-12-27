import React from "react";
import {NavLink} from "react-router-dom";
import NavIcons from "../../components/NavIcons";
import logo from "../../assets/Logo.png";
const Header = () => {
  return (
    <header>
      <nav className="py-3 navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to={"/"}>
            <img src={logo} alt="logo-img" width={40} height={40} />
          </NavLink>
          <div className="d-flex align-items-center">
            <NavIcons ulClass="d-md-none d-flex flex-row" />
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/shop"}>
                  Shop
                </NavLink>
              </li>
            </ul>
            <NavIcons ulClass="d-md-flex d-none" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
