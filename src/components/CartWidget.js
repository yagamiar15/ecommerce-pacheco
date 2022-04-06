import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { React, useContext } from "react";

const CartWidget = () => {
  
  const { calcularCantidad } = useContext(CartContext);

  return (
    <div>
      <Link style={{display:"flex"}} to="/cart">
      <span className="material-icons">shopping_cart</span>
      <p>{calcularCantidad()}</p>
      </Link>
    </div>
  );
};

export default CartWidget;