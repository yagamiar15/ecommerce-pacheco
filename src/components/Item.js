import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <div className="div__producto">
            <h3>{producto.title}</h3>
            <img className="img__productoListado" src={producto.image}/>
            <p>Precio : ${producto.price}</p>
            <Link to={`/producto/${producto.id}`}>ver detalle</Link>
        </div>
    )
}

export default Item