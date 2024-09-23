import "./NavBarStyles.css";

import React from 'react';
import { Link } from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa';
import { useState } from "react";

const  NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);

    const handleColor = () =>{
        //setColor(window.scrollY >= 100 ? true : false)
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", handleColor);

  return (
    <div className= {color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Jovani Reyes</h1>
        </Link>
        <ul className= {click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link> 
            </li>
            <li> 
                <Link to="/Projects">Projects</Link> 
            </li>
            <li> 
                <Link to="/AboutMe">About Me</Link> 
            </li>
            <li> 
                <Link to="/Contact">Contact</Link> 
            </li>
        </ul>
        <div class="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={35} style={{color: "#fff"}}/>) : (<FaBars size={30} style={{color: "#fff"}}/>)}
        </div>
    </div>
  )
}

export default NavBar