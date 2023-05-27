import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
function Header({ branding }) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-3">
        <div className="container">
          <Link to="/" className="navbar-brand font-weight-bold ">
            {" "}
            <h3> {branding}</h3>
          </Link>

          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link text-white d-flex align-items-center justify-content-center ">
                  {" "}
                  <AiOutlineHome /> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact/add" className="nav-link text-white d-flex align-items-center justify-content-center">
                  {" "}
                  <AiOutlinePlus /> Add
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.defaultProps = {
  branding: "my app",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;
