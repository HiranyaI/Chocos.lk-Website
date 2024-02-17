import React from "react";
import './Footer.css';
import logo from '../Assets/Chocos.lk.png';
import insta from'../Assets/insta.png';
import tiktok from'../Assets/tiktik.png';
import wa from '../Assets/wa.png';
import fb from'../Assets/fb.png';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt=""/>
                <p>Chocos.lk</p>
            </div>
            <ul className="footer-links">
                <li>Shop</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={insta} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={wa} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={fb} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={tiktok} alt=""/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2023 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer