import React from "react";
import "./Styles/About.css";

export default function About() {
  
  const redirectToLink = () => {
    // window.location.href = "https://wa.link/fllqnm";
    console.log("Contact Me Button clicked!");
  };

  return (
    <div id="about" className="about">
      <div id="text-about">
        <div className="title">
          <span className="reveal-text" style={{ "--delay": "0s" }}>
            Hello World,
          </span>
          <span className="reveal-text" style={{ "--delay": ".3s" }}>
            My name is Damara Hamonangan Akbar
          </span>
          <span className="reveal-text" style={{ "--delay": ".5s" }}>
            And I'm a
          </span>
        </div>
        <span className="reveal-text" style={{ "--delay": ".7s" }}>
          <div className="wrapper">
            <div className="words">
              <span>I'm a Full-stack developer,</span>
              <span>Back-end developer,</span>
              <span>Front-end Developer,</span>
              <span>Android/IOS Developer</span>
            </div>
          </div>
        </span>
        <br />
        <a href="#" onClick={() => {console.log("clicked")}}>Contact Me</a>
        <button>Resume</button>
        <span className="reveal-text" style={{ "--delay": ".9s" }}>
          Specialize in crafting captivating web and mobile interfaces to deliver flawless digital experiences.
        </span>
      </div>
      <div id="image-about">
        <img src="/public/2023-11-24_03-33-15_8471.png" alt="" />
      </div>
    </div>
  );
}
