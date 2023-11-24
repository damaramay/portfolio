import { Link } from "react-scroll";

import "./Styles/Home.css";
import "./Styles/Navbar.css";
import About from "./About";
import Projects from "./Projects";
import Snipplets from "./ContactMe";

export default function Home() {
  return (
    <div id="home" className="container">
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
                <Link to="about" smooth={true} duration={500}>
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

        <div id="" className="content">
          <About />
          <Projects />
          <Snipplets />
        </div>
    </div>
  );
}
