import React, { useState } from "react";
import './Navbar.css';

import cart from'../Assets/cart.png';
import logo from '../Assets/Chocos.lk.png';
import { Link } from "react-router-dom";

const Navbar =()=>{

    const [menu,setMenu]=useState("shop");

    return(
        <div className ='navbar'>
            <div className ="nav-logo">
                <img src={logo} alt=""/>
                <p>Chocos.lk</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("chocolate")}}><Link style={{textDecoration:'none'}} to='/chocolate'>Chocolates</Link>{menu==="chocolate"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("cafes")}}><Link style={{textDecoration:'none'}} to='cafes'>Cafe</Link>{menu==="cafes"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("nut")}}><Link style={{textDecoration:'none'}} to='nut'>Nuts</Link>{menu==="nut"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} alt=""/></Link>
                <div className="nav-cart-count">0</div>

            </div>

        </div>
    )
}

export default Navbar