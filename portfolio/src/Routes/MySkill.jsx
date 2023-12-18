/* eslint-disable no-unused-vars */
import apolo from "../Logos/apolo.png"
import angular from "../Logos/angular.png"
import css from "../Logos/csslogo.74ff0b5fd86f9eadddd3.png"
import expressJs from "../Logos/expressJs.png"
import graphql from "../Logos/graphql.png"
import html from "../Logos/Untitled.png"
import javascript from "../Logos/jslogo.923275cdf7e3c2565687.png"
import python from "../Logos/python.png"
import jest from "../Logos/jest.png"
import nodeJs from "../Logos/nodeJs.png"
import nodeJsButWhite from "../Logos/nodeJsButWhite.png"
import pinia from "../Logos/pinia.png"
import postgres from "../Logos/postgresqllogo.c56c146c8e3ec2402c98.png"
import react from "../Logos/react.png"
import redis from "../Logos/redis.png"
import redux from "../Logos/redux.png"
import sequelize from "../Logos/sequelize.png"
import typescript from "../Logos/typescript.png"
import vuejs from "../Logos/vuejs.png"
import MongoDB from "../Logos/mongodblogo.0d9f5240269b62f5129c.png"
import bootstraplogo from "../Logos/bootstraplogo.c5b2fc44d37fd3864947.png"
import tailwindlogo from "../Logos/tailwindlogo.3549d9e451d7abb96934.png"


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
