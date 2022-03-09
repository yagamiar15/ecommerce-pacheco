import React from "react";
import ItemCount from "./ItemCount";

const Item = ({item}) => {return (

    <div className="div__itemcount-botonera">
     <h4>PRODUCTO</h4>
     <div className="div__itemcount-botonera">
         <p>{item.title}</p>
         <p> $ {item.price}</p>
         <ItemCount stock={5} inicial={1} />
     </div>
    </div>
 
 );
 };

 export default Item;