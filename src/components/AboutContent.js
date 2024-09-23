//Import CSS and React
import './AboutContentStyles.css';
import React from 'react'
//Import Link from react-router-dom, similar to an anchor tab but it changes the URL, and renders the new componenent specified in the 'to' prop without having to reload the whole page. This way different pages are actually different views rendered within the same HTML Page.
import { Link } from 'react-router-dom';
//Import Images from assets folder
import About1 from '../assets/About1.jpg';
import About2 from '../assets/About2.jpg';

//Create AboutContent function
const AboutContent = () => {
    return (
        //Parent div which contains two children divs, left side is for the about me text and right side is for images of me
        <div className="bio">
            <div className="left-side">
                <h1>Who Am I ?</h1>
                <p>I was someone who had no coding experience prior to college, I learned most of my coding through personal studying by utilizing online tutorials and websites.</p>
                <Link to="/Contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right-side">
                <div className="img-container">
                    <div className="top-img">
                        <img src={About1} className="images" alt="About me 1"/>
                    </div>
                    <div className="bottom-img">
                        <img src={About2} className="images" alt="About me 2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
//Export AboutContent function
export default AboutContent;
