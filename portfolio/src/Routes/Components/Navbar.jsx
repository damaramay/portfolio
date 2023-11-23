import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div id="header">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="Home" smooth={true} duration={500}>
                Home
              </Link>
            </li>

            <li>
              <Link to="About" smooth={true} duration={500}>
                About
              </Link>
            </li>

            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="Snipplets" smooth={true} duration={500}>
                My Snipplets
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
