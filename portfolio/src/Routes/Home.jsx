import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Styles/Home.css";
import About from "./About";
import Projects from "./Projects";
import Snipplets from "./Snipplets";
import Navbar from "./Components/Navbar";

export default function Home() {


  return (
    <div>
      <Parallax pages={4} >
        <ParallaxLayer sticky={{ start: 0, end: 4 }} style={{ textAlign: "center" }}>
          <Navbar />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.5} >
          <About />
        </ParallaxLayer>
      </Parallax>
      
    </div>
  );
}
