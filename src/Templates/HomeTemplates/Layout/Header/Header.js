import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
        <NavLink className="navbar-brand mr-5" to="/">
          <img
            src="http://blockter.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2018/02/logo.png"
            alt=""
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-5 ">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/new">
                New
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <NavLink to="/login" className="btn btn-danger">
            Sign In
          </NavLink>
          <button className="btn btn-success ml-3">Sign Up</button>
        </div>
      </nav>
    </div>
  );
}
