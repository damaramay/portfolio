import "./Styles/MySkill.css";
import apolo from "../../public/skills/apolo.png"
import angular from "../../public/skills/angular.png"
import css from "../../public/skills/csslogo.74ff0b5fd86f9eadddd3.png"
import expressJs from "../../public/skills/expressJs.png"
import graphql from "../../public/skills/graphql.png"
import html from "../../public/skills/Untitled.png"
import javascript from "../../public/skills/jslogo.923275cdf7e3c2565687.png"
import python from "../../public/skills/python.png"
import jest from "../../public/skills/jest.png"
import nodeJs from "../../public/skills/nodeJs.png"
import nodeJsButWhite from "../../public/skills/nodeJsButWhite.png"
import pinia from "../../public/skills/pinia.png"
import postgres from "../../public/skills/postgresqllogo.c56c146c8e3ec2402c98.png"
import react from "../../public/skills/react.png"
import redis from "../../public/skills/redis.png"
import redux from "../../public/skills/redux.png"
import sequelize from "../../public/skills/sequelize.png"
import typescript from "../../public/skills/typescript.png"
import vuejs from "../../public/skills/vuejs.png"
import MongoDB from "../../public/skills/mongodblogo.0d9f5240269b62f5129c.png"
import bootstraplogo from "../../public/skills/bootstraplogo.c5b2fc44d37fd3864947.png"
import tailwindlogo from "../../public/skills/tailwindlogo.3549d9e451d7abb96934.png"


export default function MySkill() {
  return (
    <div id="SkillContainer" className="SkillContainer">
      <div className="textskills">
        <h1>My Skills</h1>
        <h3>I have built proficiency in various technologies and tools throughout my journey. Below are some of the key components of my technical expertise, including the tech stack and tools I am proficient in:</h3>
      </div>

      <div className="skillsLogoContainer">
        <img src={html} alt="" />
        <img src={javascript} alt="" />
        <img src={css} alt="" />
        <img src={python} alt="" />
        <img src={nodeJsButWhite} alt="" />
        <img src={sequelize} alt="" />
        <img src={react} alt="" />
        <img src={vuejs} alt="" />
        <img src={angular} alt="" />
        <img src={postgres} alt="" />
        <img src={apolo} alt="" />
        <img src={graphql} alt="" />
        <img src={MongoDB} alt="" />
        <img src={redux} alt="" />
        <img src={expressJs} alt="" />
        <img src={jest} alt="" />
        <img src={redis} alt="" />
        <img src={typescript} alt="" />
        <img src={pinia} alt="" />
        <img src={bootstraplogo} alt="" />
        <img src={tailwindlogo} alt="" />
      </div>
    </div>
  );
}
