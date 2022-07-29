import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar=()=>{
    return (
        <header className= "header">
        <nav className="navBar">
            <div className="navBar__title">
                <ul>
                <NavLink to="/">
                    <img id="logo" src="https://toppng.com/uploads/preview/trolley-vector-grocery-cart-jpg-royalty-free-shopping-cart-vector-11562900803kma5vmgfao.png" alt=""></img>
                    Comercio Libre
                </NavLink>
                </ul>
            </div>
            <div className="navBar__items">
                <CartWidget className="cartWidget" />
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                <NavLink to="/category/productos">Catálogo de productos</NavLink>
                </li>
                <li>
                <NavLink to="/category/electronics">Electrónica</NavLink>
                </li>
                <li>
                <NavLink to="/category/joyeria">Joyería</NavLink>
                </li>
                <li>
                <NavLink to="/category/women's clothing">Ropa femenina</NavLink>
                </li>
                <li>
                <NavLink to="/category/men's clothing">Ropa masculina</NavLink>
                </li>
            </div>
        </nav>
    </header>)
}
export default NavBar;