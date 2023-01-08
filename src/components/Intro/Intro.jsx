import React from "react";
import "./intro.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import glasses from "../../img/glasses.png";

const Intro = ()=>{
    return(
        <div className="i-wrapper">
            <div className="i-left">
                <div className="i-name">
                <span>Hi, I Am</span>
                <span>Maki Zenin</span>
                <span>Full Stack developer with a passion in building thing.
                    <br />
                    Coding Lover , Never Stop Learning or Coding..</span>
                </div>
                <button className = "button i-button">Hire Me</button>
                <div className="i-icons">
                    <img src = {github} alt="github" />
                    <img src = {linkedin} alt="linkedin" />
                    <img src = {instagram} alt="instagram" />
                </div>
            </div>

            <div className="i-right">
                <img src = {vector1} alt="vector1" />
                <img src = {vector2} alt="vector2" />
                <img src = {boy} alt="boy" />
                <img src = {glasses} alt="glasses" />

                <div style = {{top: "-5%", left: "40%"}}>
                    <FloatingDiv image={crown} text1="Web" text2="Developer"/>
                </div>
                <div style = {{bottom: "15%", left: "-20%"}}>
                    <FloatingDiv image={thumbup} text1="Fast" text2="Learner"/>
                </div>
            </div>
                
        </div>
    )
}

export default Intro;