import React from "react";
import './Hero.css';
import hand from '../Assets/hand.png';
import arrow from '../Assets/arroww.png';
import chocolate2 from '../Assets/milkadark.png';

const Hero = () =>{
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>Chocos.lk</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Hello!</p>
                        <img src ={hand} alt=""/>
                    </div>
                    <p>Welcome</p>
                    <p>To Our Shop</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Chocolates</div>
                    <img src={arrow} alt=""/>

                </div>
            </div>
            <div className="hero-right">
                <img src={chocolate2} alt=""/>
            </div>
    </div>
    )
    
}

export default Hero