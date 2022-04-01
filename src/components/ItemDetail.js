import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';



const ItemDetail = ({item}) => {
    const  [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext); 
    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addToCart(item, cantidad);
    };

    return (
        <article className="article__center">
            <article className="article__itemDetail">
                <img className="img__productoDetalle" src={item.image} alt="" />
                <div className="article__itemDetail-item">
                    <h3>{item.title}</h3>
                <p className="itemDetail__descripcion">{item.description}</p>
                    <p>${item.price}</p>
                </div>
                { cantidad === 0 ? <ItemCount item={item} onAdd={onAdd} /> : 
                    <div>
                        <Link to="/cart"><button className='button__agregar'>Finalizar Compra</button></Link>
                        <Link to="/category/productos"><button className='button__agregar'>Continuar Comprando</button></Link>
                    </div>}
            </article>
        </article>
    );
};



export default ItemDetail;