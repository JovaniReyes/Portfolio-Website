import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from '../assets/Q4-SolderFinal.png';
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className= "hero">.
      <div className="mask">
          <img className="into-img" src={IntroImg} alt="Intro Img"/>
      </div>
      <div className="content">
        <p>Welcome to my Website!</p>
        <br></br>
        <div>
          <Link to="/Projects" className="btn">Projects</Link>
          <Link to="/Contact" className="btn">Contact</Link>
        </div>
      </div>
    </div>
  )
}
 export default HeroImg;