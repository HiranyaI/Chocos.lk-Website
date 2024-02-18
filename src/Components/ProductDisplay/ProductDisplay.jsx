import React from "react";
import './ProductDisplay.css';
import empty_star from '../Assets/dull star.png';
import star from '../Assets/full star.png';

const ProductDisplay = (props) =>{
    const {products}=props;
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={products.image} alt="" />
                    <img src={products.image} alt="" />
                    <img src={products.image} alt="" />
                    <img src={products.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={products.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{products.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={empty_star} alt="" />
                    <p>(20)</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay