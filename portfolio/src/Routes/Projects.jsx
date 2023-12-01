import { useState } from "react";
import "./Styles/Projects.css";
import helpingHand from "../../public/helpingHand.jpg";
import linkedun from  "../../public/Screenshot 2023-12-01 135348.png"

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
            <img src={helpingHand} alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div id="onGoingProjects" className={toggle === 2 ? "show-content" : "project-content"}>
          <div className="image-gallery">
            <img src={linkedun} alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
