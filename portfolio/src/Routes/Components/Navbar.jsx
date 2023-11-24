import React from "react";
import { Link } from "react-scroll";

const Navbar = ( ) => {

  return (
    <div id="header">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
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

            <li>
              <Link to="snipplets" smooth={true} duration={500}>
                CSS
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
