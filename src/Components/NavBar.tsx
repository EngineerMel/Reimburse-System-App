import React from "react";
import { NavLink, Link } from "react-router-dom";

export interface NavBarProps {}

const NavBar: React.SFC<NavBarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Reimbursement System
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/nestednav">
            Get Started
          </NavLink>
          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
