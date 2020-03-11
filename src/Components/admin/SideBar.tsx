import React from "react";
import { NavLink } from "react-router-dom";

export interface SideBarProps {}

const SideBar: React.SFC<SideBarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <NavLink className="nav-item nav-link" to="/submitform">
            Submit Form
          </NavLink>
          <NavLink className="nav-item nav-link" to="/handlereimbursement">
            Handle Requests
          </NavLink>
          <NavLink className="nav-item nav-link" to="/viewmyforms">
            View My Forms
          </NavLink>
          <NavLink className="nav-item nav-link" to="/profile">
            Profile
          </NavLink>

          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
