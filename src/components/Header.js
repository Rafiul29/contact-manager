import React from "react";
import PropTypes from "prop-types";

function Header({ branding }) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-3">
        <div className="container">
          <a href="/" className="navbar-brand font-weight-bold ">
            {" "}
          <h3>  {branding}</h3>
          </a>

          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  {" "}
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  {" "}
                  Add
                </a>
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
