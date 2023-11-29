import { Link } from "react-scroll";
import "./Styles/Home.css";
import "./Styles/Navbar.css";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import skillImgFe from "../../public/skillBarImgFE.svg";
import skillImgBE from "../../public/skillBarImgBE.svg";
import skillImgFS from "../../public/skillBarImgFS.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
                <Link to="ContactMe" smooth={true} duration={500}>
                  CSS
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div id="" className="content" data-aos="fade-up">
        <About />
        <div id="summary" className="summary" data-aos="fade-up">
          <div className="tracking-in-expand-fwd">
            <h1>What I Do</h1>
            <p>
              I am an aspiring web developer with a focus on full-stack development. I have a solid foundation in HTML, CSS, and JavaScript, and I'm proficient in React and Vue for building dynamic user interfaces. Additionally, I have
              experience with both SQL databases like PostgreSQL and NoSQL databases like MongoDB.
            </p>
          </div>
          <div className="skillBars">
            <div className="skillBar">
              <img src={skillImgFe} alt="FrontEnd" />
              <div className="skillBarText">
                <h2>Front-End Development</h2>
                <p>Expertise in building user interfaces with HTML, CSS, and JavaScript. Proficient in React and Vue for creating dynamic and interactive web applications.</p>
              </div>
            </div>
            <div className="skillBar">
              <img src={skillImgBE} alt="BackEnd" />
              <div className="skillBarText">
                <h2>Back-End Development</h2>
                <p>Experience in server-side programming using Node.js and Express.js. Skilled in database management with PostgreSQL and MongoDB. Proficient in testing with Jest for ensuring code quality and reliability.</p>
              </div>
            </div>
            <div className="skillBar">
              <img src={skillImgFS} alt="FullStack" />
              <div className="skillBarText">
                <h2>Full-stack Development</h2>
                <p>Combining front-end and back-end skills to create end-to-end web applications. Proficient in both client-side and server-side technologies for seamless development.</p>
              </div>
            </div>
          </div>
        </div>
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}
