import React from "react";
import Item from "./Item";

const ItemList = ({item}) => {
    return(
        <div>
            <h3>LISTA DE PRODUCTOS</h3>
                <div>
                {item.map((item) => (
                    <Item id ={item.id} item={item} />
                ))}
                </div>    
        </div>
    )
}

export default ItemList