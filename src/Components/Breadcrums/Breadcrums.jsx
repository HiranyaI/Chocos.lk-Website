import React from "react";
import './Breadcrums.css';
import arrow from '../Assets/arroww.png';

const Breadcrums = (props) =>{
    const {products} = props;
    return(
        <div className="breadcrum">
            HOME <img src={arrow} alt="" />SHOP<img src={arrow} alt=""/>{products.category}<img src={arrow} alt=""/>{products.name}
        </div>
    )
}



export default Breadcrums