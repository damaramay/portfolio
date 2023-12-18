/* eslint-disable react/no-unescaped-entities */
import MyResumePDF from "../Documents/CV Damara Hamonangan Akbar.pdf";
import MyPhoto from "../Portfolio-images/profilepicture.jpg";
import Swal from "sweetalert2";

export default function About() {
  const redirectToLink = () => {
    window.location.href = "https://wa.link/fllqnm";
    console.log("Contact Me Button clicked!");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    fetch(MyResumePDF)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = "Damara-Hamonangan-akbar-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
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
        <button onClick={() => {
          let timerInterval;
          Swal.fire({
            title: "Auto close alert!",
            html: "Contacting Damara in <b></b> milliseconds. Don't forget to say Hi!",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              redirectToLink()
            }
          });
        }}>Contact Me</button>
        <button
          onClick={() => {
            Swal.fire({
              title: "Do you want to save the Resume in PDF?",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "Save",
              denyButtonText: `Don't save`,
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Saved!", handleDownload(), "success");
              } else if (result.isDenied) {
                Swal.fire("Download Canceled", "If you want to see more than my resume, please check my LinkedIn", "error");
              }
            });
          }}
        >
          Resume
        </button>
        <button
          onClick={() => {
            let timerInterval;
            Swal.fire({
              title: "Auto close alert!",
              html: "Opening Damara H.A LinkedIn in <b></b> milliseconds.",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                window.location.href = "https://www.linkedin.com/in/damaraharahap";
              }
            });
          }}
        >
          LinkedIn
        </button>
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
