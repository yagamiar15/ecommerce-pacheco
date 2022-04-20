import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { cart, calcularTotal, vaciarCarrito, borrarProd } =
    useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <div className="div__cart__empty">
          <h1>Tu carrito está vacío! Vamos a comprar algo...</h1>
          <img className="div__cart__empty__img" src="https://www.kindpng.com/picc/m/257-2571907_transparent-background-question-mark-face-hd-png-download.png"></img>
          <Link to="/"><button className="div__cart__empty__button">Inicio</button></Link>
        </div>
      ) : (
        <div className="div__cart__container">
          {cart.map((product) => (
            <div className="div__cart" key={product.id}>
              <img src={product.image} alt={product.title} width="150px" />
              <div>
                <h3>Nombre: {product.title}</h3>
                <h4>Cantidad: {product.cantidad}</h4>
                <h4>Precio unitario: $ {product.price}</h4>
                <h4>Subtotal: $ {product.price * product.cantidad}</h4>
                <button className='button__cart__delete' onClick={() => borrarProd(product.id)}>Eliminar</button>
              </div>
            </div>
          ))}
                <h2>Total: ${calcularTotal()}</h2>
              {" "}
              <button onClick={vaciarCarrito}>Vaciar carrito</button>
              <Link to="/checkout"><button>Finalizar compra</button></Link>
        </div>
      )}
    </>
  );
};

export default Carrito;