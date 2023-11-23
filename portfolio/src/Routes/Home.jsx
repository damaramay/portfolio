import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import "./Styles/Home.css";
import About from "./About";
import Projects from "./Projects";
import Snipplets from "./Snipplets";
import Navbar from "./Components/Navbar";

export default function Home() {
  const ref = useRef();

  return (
    <div id="home">
      <Navbar />

      <About />

      <Projects />

      <Snipplets />
    </div>
  );
}
