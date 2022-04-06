import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { cart, calcularTotal, vaciarCarrito, borrarProd } =
    useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <div>
          <Link to="/">Inicio</Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
          {cart.map((product) => (
            <div className="div__cart" key={product.id}>
              <img src={product.image} alt={product.title} width="150px" />
              <div>
                <h3>Nombre: {product.title}</h3>
                <h4>Cantidad: {product.cantidad}</h4>
                <h4>Precio unitario: $ {product.price}</h4>
                <h4>Subtotal: $ {product.price * product.cantidad}</h4>
                <button className='button__agregar' onClick={() => borrarProd(product.id)}>Eliminar</button>
              </div>
            </div>
          ))}
                <h2>Total: ${calcularTotal()}</h2>
        </div>
      )}
        {" "}
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to="/checkout"><button>Finalizar compra</button></Link>
    </>
  );
};

export default Carrito;