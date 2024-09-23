//Import React and CSS
import "./FooterStyles.css";
import React from 'react'
//Import Icons from react-icons/fa
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left-side">
                    <h4>Contact Me</h4>
                    <div className="email">
                        <p><FaMailBulk size={25} style={{color: "#fff", marginRight: "2rem"}}/>Jovanireyes82@gmail.com</p>
                    </div>
                    <div className="phone">
                        <p><FaPhone size={25} style={{color: "#fff", marginRight: "2rem"}}/>(469) 434-0158</p>
                    </div>
                    <div className="address">
                        <p><FaHome size={25} style={{color: "#fff", marginRight: "2rem"}}/>851 Constition Ave Apt wN122 Fort Collins, CO 80521</p>
                    </div>
                </div>
                <div className="right-side">
                    <h4>About This Site</h4>
                    <p>This Portfolio site was created Using JavaScript HTMl and includes a collection of functions from React-Render, icons, and nav.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                        <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer