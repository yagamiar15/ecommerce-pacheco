import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount() {
  let stock = 5;
  const inicial = 1;
  let [itemCount, setEstado] = useState(inicial);
  const HandleSumar = () => {
    if (itemCount >= stock) {
    } else {
      setEstado(itemCount + 1);
    }
  };

  const HandleRestar = () => {
    if (itemCount <= inicial) {
    } else {
      setEstado(itemCount - 1);
    }
  };

  const HandleAgregar = () => {
    setEstado(1);
    console.log(`Se agregaron ${itemCount} articulos`);
  };

  return (
    <div className="div__itemcount">
      <div className="div__itemcount-botonera">
        <button className="button__restar" onClick={HandleRestar}></button>
        <p>{itemCount}</p>
        <button className="button__sumar" onClick={HandleSumar}></button>
      </div>
      <button className="button__agregar" onClick={HandleAgregar}>Añadir al carrito</button>
      <Link to='/cart'><button className="button__agregar">Finalizar compra</button></Link>
    </div>
  );
}

export default ItemCount;