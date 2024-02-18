import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import ShopContext from '../Context/ShopContext';
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Products = () => {
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const products = all_product.find((e)=>e.id===Number(productId));
    return(
        <div>
            <Breadcrums product={products}/>
            <ProductDisplay product={products}/>
        </div>
    )
}

export default Products