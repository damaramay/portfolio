/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"

const Navbar = ( ) => {

  return (
    <div id="header" className="header">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="" smooth={true} duration={500}>
                Home
              </Link>
            </li>

            <li>
              <Link to="about" smooth={true} duration={500} >
                About
              </Link>
            </li>

            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
