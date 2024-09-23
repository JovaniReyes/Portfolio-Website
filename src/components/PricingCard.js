import "./PricingCardStyles.css"
import React from 'react'

const PricingCard = () => {
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>About This Site</h3>
                    <span className="bar"></span>
                    <p className="btc"> Intended for a Portfolio and a hub for other projects created</p>
                    <p> Personal Websites that use React-Redux for non-static web application showcase. </p>
                    {/* <Link to="/contact" classname="btn">PURCHASE</Link> */}
                </div>
                {/* <div className="card">
                    <h3>Premium</h3>
                    <span className="bar"></span>
                    <p className="btc"> $200-300</p>
                    <p>6 pages</p>
                    <p> Websites using Javasript for multi-user interaction such as social media sites. Site will have API's for email verification for personal accounts</p>
                    <p></p>
                    <p></p>
                    <Link to="/contact" classname="btn">PURCHASE</Link>
                </div>
                <div className="card">
                    <h3>Business</h3>
                    <span className="bar"></span>
                    <p className="btc"> Contact</p>
                    <p>For Estimates</p>
                    <p> Website using MERN stack for E-commerce sites such as Etsy, site will have API's for accounts, bank, postal.</p>
                    <p></p>
                    <p></p>
                    <p></p> */}
                    {/* <Link to="/contact" classname="btn">PURCHASE</Link> */}
                {/* </div> */}
            </div>
        </div>
    )
}
export default PricingCard