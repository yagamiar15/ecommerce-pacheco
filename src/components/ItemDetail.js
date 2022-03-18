import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    const onAdd = (cantidadSeleccionada) => {
        console.log('Añadir al carrito',cantidadSeleccionada)
    };

    return (
        <article className="article__center">
            <article className="article__itemDetail">
                <img className="img__productoDetalle" src={item.image} alt="" />
                <div className="article__itemDetail-item">
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
                <p className="itemDetail__descripcion">{item.description}</p>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                <button>Finalizar compra</button>
            </article>
        </article>
    );
};

export default ItemDetail;