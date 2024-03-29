import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [number, setNumber] = useState(1);

  const add = () => {
    number !== stock && setNumber(number + 1);
  };

  const substract = () => {
    number !== 0 && setNumber(number - 1);
  };

  const handleAdd = () => {
    if (number !== 0) {
      onAdd(number);
    }
  };

  return (
    <div className="div__itemcount">
      <div className="div__itemcount-botonera">
        <button className="button__restar" onClick={substract}></button>
        <p>{number}</p>
        <button className="button__sumar" onClick={add}></button>
      </div>
      <button className="button__agregar" onClick={handleAdd}>Añadir al carrito</button>
    </div>
  );
}

export default ItemCount;