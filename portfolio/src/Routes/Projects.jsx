/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import helpingHand from "../Portfolio-images/helpingHand.jpg";
import linkedun from "../Portfolio-images/Screenshot 2023-12-01 135348.png";
import webPorto from "../Portfolio-images/WhatsApp Image 2023-12-03 at 09.44.31_1bf5ab5c.jpg";
import tiktok from "../Portfolio-images/1.jpg";
import youtube from "../Portfolio-images/2.jpg";
import ecomers from "../Portfolio-images/3.jpg";

export default function Projects() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <>
      <div id="projects" className="projects">
        <div id="tabs" className="tabs">
          <ul id="tabsUl">
            <li
              onClick={() => {
                updateToggle(1);
              }}
            >
              <h1>Past Projects</h1>
            </li>
            <li
              onClick={() => {
                updateToggle(2);
              }}
            >
              <h1>On Going Projects</h1>
            </li>
          </ul>
        </div>
        <p>Becoming a passionate programmer is an ever-evolving journey, and just like this portfolio, the adventure is bound to be a continuous expansion.</p>
        <div id="pastProjects" className={toggle === 1 ? "show-content" : "project-content"}>
          <div className="image-gallery">
            <a href="https://github.com/Helping-Hand-Hacktiv8">
              <img src={helpingHand} alt="" />
            </a>
            <a href="https://github.com/damaramay/portfolio" target="_blank">
              <img src={webPorto} alt="" />
            </a>
          </div>
        </div>
        <div id="onGoingProjects" className={toggle === 2 ? "show-content" : "project-content"}>
          <div className="image-gallery">
            <a href="https://github.com/damaramay/Linkedun" target="_blank">
              <img src={linkedun} alt="" />
              {/* <h1>Testing</h1> */}
            </a>
            <a href="https://github.com/damaramay/Tiktuk" target="_blank">
              <img src={tiktok} alt="" />
            </a>
            <a href="https://github.com/damaramay/Youtrube" target="_blank">
              <img src={youtube} alt="" />
            </a>
            <a href="https://github.com/damaramay/Ecomurz" target="_blank">
              <img src={ecomers} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
