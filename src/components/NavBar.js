import CartWidget from "./CartWidget";

const NavBar=()=>{
    return (
        <nav class="navBar">
        <h3>
            Tienda Pacheco
        </h3>
        <ul class="headerUnorderedList">
            <div class="headerList">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <li>
                    <CartWidget cantidad="0" />
                </li>
            </div>
        </ul>
        </nav>
    )
}
export default NavBar;