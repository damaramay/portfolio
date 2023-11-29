import React from "react";
import "./Styles/About.css";
import MyResumePDF from "../../public/CV Damara Hamonangan Akbar.pdf"
import MyPhoto from "../../public/linkedinPhoto-transformed.jpeg"
import { Link } from "react-router-dom";

export default function About() {
  
  const redirectToLink = () => {
    window.location.href = "https://wa.link/fllqnm";
    console.log("Contact Me Button clicked!");
  };

    const handleDownload = () => {
      const link = document.createElement("a");
  
      // Membuat URL data dari file PDF
      fetch(MyResumePDF)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          link.href = url;
          link.download = "Damara-Hamonangan-akbar-Resume.pdf"; // Nama file yang akan diunduh
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url); // Membersihkan URL data setelah pengunduhan
        });
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
        <button onClick={redirectToLink}>Contact Me</button>
        <button onClick={handleDownload}>Resume</button>
        <Link to="/about">Read More</Link>
        <span className="reveal-text" style={{ "--delay": ".9s" }}>
          Specialize in crafting captivating web and mobile interfaces to deliver flawless digital experiences.
        </span>
      </div>
      <div id="image-about">
        <img src={MyPhoto} alt="" />
      </div>
    </div>
  );
}
