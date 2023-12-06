import "./Styles/MySkill.css";
import helpingHand from "../../public/helpingHand.jpg"

export default function MySkill() {
  return (
    <div id="SkillContainer" className="SkillContainer">
      <div className="textskills">
        <h1>My Skills</h1>
        <h3>I have built proficiency in various technologies and tools throughout my journey. Below are some of the key components of my technical expertise, including the tech stack and tools I am proficient in:</h3>
      </div>

      <div className="skillsLogoContainer">
        <img src={helpingHand} alt="" />
        <img src={helpingHand} alt="" />
        <img src={helpingHand} alt="" />
      </div>
    </div>
  );
}
