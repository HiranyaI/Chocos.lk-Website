import React from "react";
import './NewCollections.css';
import Item from "../Items/Item";
import Shop from "../../Pages/Shop";

import new_collections from'../Assets/newCollections';

const NewCollections = () =>{
    return(
        <div className="newcollections"> 
            <h1>NEW ITEMS</h1>
            <hr/>
            <div className="collections">
                {new_collections.map((item,i)=>{
                    return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default NewCollections