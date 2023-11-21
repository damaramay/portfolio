import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { Link } from "react-router-dom";
import top from "../../public/back-ground-top.png";
import bottom from "../../public/back-ground-bottom.png";
import "./Styles/Home.css";
import About from "./About"
import Projects from "./Projects"
import Snipplets from "./Snipplets"


export default function Home() {
  const ref = useRef();

  return (
    <Parallax pages={4} ref={ref}>
      <div id="top-cover">
        <ParallaxLayer
          offset={0}
          speed={1}
          //   style={{
          //     backgroundImage: `url(${top})`,
          //     backgroundSize: `cover`,
          //   }}
        />
      </div>

      <ParallaxLayer sticky={{ start: 0, end: 0 }} style={{ textAlign: "center" }}>
        <div id="header">
          <header>
            <nav>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>

                <li>
                  <Link to={"/About"}>About</Link>
                </li>

                <li>
                  <Link to={"/Projects"}>Projects</Link>
                </li>

                <li>
                  <Link to={"/Snipplets"}>My Snipplets</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
      offset={0.5}
      speed={1}
      >
        <About />
      </ParallaxLayer>

      <ParallaxLayer
      offset={2}
      speed={1}
      >
        <Projects />
      </ParallaxLayer>

      <ParallaxLayer
      offset={3}
      speed={1}
      >
        <Snipplets />
      </ParallaxLayer>

      <div id="bottom-cover">
        <ParallaxLayer
          offset={2}
          speed={1}
          //   style={{
          //     backgroundImage: `url(${bottom})`,
          //     backgroundSize: `cover`,
          //   }}
        />
      </div>
    </Parallax>
  );
}
